import ApiServices from "../../../services/Api";

const FetchService = {
  getAllData: async () => {
    try {
      const response = await ApiServices.get("/api/v2/ability");
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  getDetailData: async () => {
    try {
      const response = await ApiServices.get("/api/v2/ability/battle-armor");
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default FetchService;
