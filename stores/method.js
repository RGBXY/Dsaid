import { defineStore } from "pinia";

export const useMethodstore = defineStore("method", {
  state: () => ({
    notifStat: false,
    modalStat: false,
    modalActStat: false,
    modalProfileStat: false,
    modalUpdateStat: false,
    modalAlertStat: false,
    modalActId: 0,
    modalUpdateId: 0,
    notifData: null,
  }),
  actions: {
    modalFnc() {
      this.modalStat = !this.modalStat;

      if (this.modalStat === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
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
      document.body.style.overflow = "hidden";
    },
    modalUpdateClose() {
      this.modalUpdateStat = false;
      this.modalActStat = false;
      document.body.style.overflowY = "auto";
    },
    notifFnc(data) {
      this.notifStat = true;
      this.notifData = data;
    },
    notifFncClose() {
      this.notifStat = false;
    },
    modalAlertFnc() {
      this.modalAlertStat = true;
      document.body.style.overflow = "hidden";
    },
    modalAlertClose() {
      this.modalAlertStat = false;
      document.body.style.overflowY = "auto";
      this.modalActStat = false;
    },
  },
});
