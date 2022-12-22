import axios from "axios";

export const getReddit = async () => {
  const res = await axios.get("http://localhost:8080/redditFeed");
  return res;
};
