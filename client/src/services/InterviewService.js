import Api from "@/services/Api";
export default {
  fetchInterviews() {
    return Api().get("searchAllInterviews");
  }
};
