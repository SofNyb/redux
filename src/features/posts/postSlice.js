import { createSlice } from "@reduxjs/toolkit";

import { selectAllUsers } from "../users/usersSlice";

const initialState = [
  {
    id: "1",
    title: "Første post",
    body: "Dette er det første post.",
    userId: "1",
    // name: "Emma Nielsen",
  },
  {
    id: "2",
    title: "Anden post",
    body: "Disse posts er for at vise hardcoded initial state.",
    userId: "2",
    //name: "Alexander Madsen",
  },
  {
    id: "3",
    title: "Tredje post",
    body: "Alle fire kan slettes, men kommer igen ved reload af browser.",
    userId: "1",
    // name: "Emma Nielsen",
  },
  {
    id: "4",
    title: "Fjerde post",
    body: "Ved at tilføje en ny post, vil den blive vist øverst i listen, men forsvinder ved reload af browser.",
    userId: "4",
    // name: "Lucas Pedersen",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            title,
            body,
            userId,
          },
        };
      },
    },
    postDeleted(state, action) {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
  },
});

//ved at skrive sådan, kan vi sørge for ikke at skulle rette i alle steder, det bliver brugt, ved ændring af state.
//Kun her skal det rettes
export const selectAllPosts = (state) => state.posts;

//postAdded er en action, som kan bruges i andre filer
//pga createSlice har lavet action creator function, bliver denne exporteret
export const { postAdded, postDeleted } = postSlice.actions;

export default postSlice.reducer;
