import axios from "axios";

export const getReddit = async () => {
  const res = await axios.get(
    "https://us-central1-reddit-helper.cloudfunctions.net/redditApp/redditFeed"
  );
  return res;
};
