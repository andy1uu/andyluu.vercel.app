import baseAPI from "../api";

const getReferrals = () => baseAPI.get("/referrals");

const ReferralsAPI = {
  getReferrals,
};

export default ReferralsAPI;
