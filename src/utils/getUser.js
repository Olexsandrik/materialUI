import axios from "axios";

export const getUser = async () => {
  try {
    const res = await axios.get("../../public/api/users.json");
    return res.data;
  } catch (err) {
    console.log("error fetching", err);
  }
};
