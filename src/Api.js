import axiosClient from "./axiosClient";


export const postMood = (emoji) => axiosClient.post("/moods", { emoji });
export const getMoods = (date) => axiosClient.get("/moods", { params: { date } });
