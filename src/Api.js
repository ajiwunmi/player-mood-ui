import axiosClient from "./axiosClient";


export const postMood = (emoji) => axiosClient.post("/moods", { emoji });
export const getMoods = (date) => axiosClient.get("/moods", { params: { date } });

// src/Api.js
// export const getMoods = async (date) => {
//     // Simulate backend delay
//     await new Promise((res) => setTimeout(res, 500));
  
//     return {
//       data: {
//         counts: {
//           happy: 5,
//           neutral: 3,
//           sad: 2,
//         },
//         submissions: [
//           { playerName: "John Doe", mood: "Happy", timestamp: "10:15 AM" },
//           { playerName: "Jane Smith", mood: "Sad", timestamp: "10:30 AM" },
//           { playerName: "Alex Green", mood: "Neutral", timestamp: "11:00 AM" },
//         ],
//       },
//     };
//   };
  
  export const getMoodHistory = async (date) =>  axiosClient.get("/moods/hourly", { params: { date } });
    
    // {
    // Simulate backend delay
    // await new Promise((res) => setTimeout(res, 300));
   
    // return {
    //   data: [
    //     { time: "9:00 AM", happy: 1, neutral: 0, sad: 0 },
    //     { time: "10:00 AM", happy: 2, neutral: 1, sad: 1 },
    //     { time: "11:00 AM", happy: 2, neutral: 2, sad: 1 },
    //   ],
    // };
//   };
