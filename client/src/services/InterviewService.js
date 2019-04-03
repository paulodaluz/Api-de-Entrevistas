import Api from "@/services/Api";
export default {
  createUser(params) {
    return Api().post("user", params);
  },
  fetchInterviews() {
    return Api().get("searchAllInterviews");
  },
  createInterview(params) {
    return Api().post("newInterview", params);
  }
};
