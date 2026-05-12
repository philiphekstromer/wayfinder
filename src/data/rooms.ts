// src/data/routes.ts

export interface RoomRoute {
  steps: string[];
}

export interface RoomData {
  [key: string]: RoomRoute;
}

export const OFFICE_ROOMS: RoomData = {
  "Spannhuset": {
    steps: [
      "Gå in genom huvudentrén på Plan 1.",
      "Ta hissen (rakt fram till höger) upp till Plan 4.",
      "Gå ut ur hissen och ta höger genom den grå branddörren.",
      "Sväng första vänster vid fikarummet.",
      "Spannhuset är den andra dörren på höger sida."
    ]
  },

};