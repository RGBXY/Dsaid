import { defineStore } from "pinia";

export const useMethodstore = defineStore("method", {
  state: () => ({
    notifStat: false,
    modalStat: false,
    modalActStat: false,
    modalProfileStat: false,
    modalUpdateStat: false,
    modalActId: 0,
    modalUpdateId: 0,
    notifData: null,
  }),
  actions: {
    modalFnc() {
      this.modalStat = !this.modalStat;
    },
    modalProfileFnc() {
      this.modalProfileStat = !this.modalProfileStat;
    },
    modalActFnc(id) {
      this.modalActStat = !this.modalActStat;
      this.modalActId = id;
    },
    modalUpdateFnc(id) {
      this.modalUpdateStat = !this.modalUpdateStat;
      this.modalUpdateId = id;
    },
    notifFnc(data) {
      this.notifStat = true;
      this.notifData = data;
    },
    notifFncClose() {
      this.notifStat = false;
    },
  },
});
