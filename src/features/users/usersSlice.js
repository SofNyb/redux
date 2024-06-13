import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    userId: "1",
    name: "Emma Nielsen",
  },
  {
    userId: "2",
    name: "Alexander Madsen",
  },
  {
    userId: "3",
    name: "Lucas Pedersen",
  },
  {
    userId: "4",
    name: "Isabella Andersen",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  /*reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(userId, name) {
        return {
          payload: {
            userId,
            name,
          },
        };
      },
    },
  },*/
});

//ved at skrive sådan, kan vi sørge for ikke at skulle rette i alle steder, det bliver brugt, ved ændring af state.
//Kun her skal det rettes
export const selectAllUsers = (state) => state.users;

//postAdded er en action, som kan bruges i andre filer
//pga createSlice har lavet action creator function, bliver denne exporteret
// export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
