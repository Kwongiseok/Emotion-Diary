import axios from "axios";
axios.defaults.baseURL = "https://emotion-diary-node.herokuapp.com"; // baseURL 을 설정
axios.defaults.withCredentials = true;
export const HAPPY = "happy";
export const NORMAL = "normal";
export const NEGATIVE = "negative";
export async function sentimentAnalysis(text) {
  const score = await axios.post(`/post/score`, { text });
  if (score.data < -0.25) {
    return NEGATIVE;
  } else if (score.data < 0.25) {
    return NORMAL;
  } else {
    return HAPPY;
  }
}
