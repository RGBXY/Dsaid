import { defineStore } from "pinia";

export const useApistore = defineStore("api", {
  state: () => ({
    postData: [],
    postLoad: false,
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },

    logout() {
      this.user = null;
    },

    async posts() {
      try {
        this.postLoad = true;
        const response = await $fetch("/api/posts");
        this.postData = response;
      } catch (err) {
        console.error(err);
      } finally {
        this.postLoad = false;
      }
    },

    async addPost(data) {
      try {
        const response = await $fetch("/api/add-post", {
          method: "POST",
          body: data,
        });

        // Memastikan respon mengandung data yang benar
        if (response && response.data) {
          // Menambahkan pos baru di awal array
          this.postData = [response.data, ...this.postData];
          console.log("Post Added:", response.data);
          console.log(this.postData);
        } else {
          console.error("Failed to add post:", response.message || "No message available");
        }
      } catch (err) {
        console.error("Error occurred:", err);
      }
    },

    async updatePost(id, data) {
      try {
        const response = await $fetch(`/api/update-post/${id}`, {
          method: "PUT",
          body: data,
        });
        this.posts();

        console.log("post Updated");
      } catch (error) {
        console.error(error);
      }
    },

    async deletePost(id) {
      try {
        const response = await $fetch(`/api/delete-post/${id}`, {
          method: "DELETE",
        });

        if (response.status === 200) {
          this.postData = this.postData.filter((post) => post.id !== id);
          console.log("Post Deleted:", response.message);
        } else {
          console.error("Failed to delete post:", response.message);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    },
  },
});
