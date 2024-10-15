import { defineStore } from "pinia";

export const useMethodstore = defineStore("method", {
  state: () => ({
    modalStat: false,
    modalActStat: false,
    modalUpdateStat: false,
    modalActId: 0,
    modalUpdateId: 0,
  }),
  actions: {
    modalFnc() {
      this.modalStat = !this.modalStat;
    },
    modalActFnc(id) {
      this.modalActStat = !this.modalActStat;
      this.modalActId = id;
    },
    modalUpdateFnc(id) {
      this.modalUpdateStat = !this.modalUpdateStat;
      this.modalUpdateId = id;
    },
  },
});
