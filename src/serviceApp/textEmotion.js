import axios from "axios";
axios.defaults.baseURL = "http://localhost:3060"; // baseURL 을 설정
axios.defaults.withCredentials = true;
export const HAPPY = "happy";
export const NORMAL = "normal";
export const NEGATIVE = "negative";
export async function sentimentAnalysis(text) {
  const score = await axios.post(`/post/score`, { text });
  console.log(score);
  if (score.data < -0.33) {
    return NEGATIVE;
  } else if (score.data < 0.33) {
    return NORMAL;
  } else {
    return HAPPY;
  }
}
