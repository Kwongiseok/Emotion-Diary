import axios from "axios";
axios.defaults.baseURL = "http://localhost:3060"; // baseURL 을 설정
axios.defaults.withCredentials = true;
export const HAPPY = "happy";
export const NORMAL = "normal";
export const NEGATIVE = "negative";
export async function sentimentAnalysis(text) {
  console.log(text);
  const score = await axios.post(`/post/score`, { text });

  if (score < -0.3) {
    return NEGATIVE;
  } else if (score < 0.3) {
    return NORMAL;
  } else {
    return HAPPY;
  }
}
