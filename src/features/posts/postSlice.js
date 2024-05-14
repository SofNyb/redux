import { createSlice } from "@reduxjs/toolkit"; //nanoid genererer et random id-nummer

const initialState = /*{
  darkTheme: false,
  posts: */ [
  {
    id: "1",
    title: "Første post",
    body: "Dette er det første post.",
  },
  {
    id: "2",
    title: "Anden post",
    body: "Disse posts er for at vise hardcoded initial state.",
  },
  {
    id: "3",
    title: "Tredje post",
    body: "Alle fire kan slettes, men kommer igen ved reload af browser.",
  },
  {
    id: "4",
    title: "Fjerde post",
    body: "Ved at tilføje en ny post, vil den blive vist øverst i listen, men forsvinder ved reload af browser.",
  },
]; /*,
}*/

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            title,
            body,
          },
        };
      },
    },
    postDeleted(state, action) {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
    /*toggleDarkTheme(state) {
      state.darkTheme = !state.darkTheme;
    },*/
  },
});

//ved at skrive sådan, kan vi sørge for ikke at skulle rette i alle steder, det bliver brugt, ved ændring af state.
//Kun her skal det rettes
export const selectAllPosts = (state) => state.posts;

//postAdded er en action, som kan bruges i andre filer
//pga createSlice har lavet action creator function, bliver denne exporteret
export const { postAdded, postDeleted } = postSlice.actions;

export default postSlice.reducer;
