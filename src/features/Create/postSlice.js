import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.title = action.payload.title;
      state.body = action.payload.body;
    },
  },
  /*reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setBody(state, action) {
      state.body = action.payload;
    },
    resetPost: {
      prepare(title, body) {
        return {
          payload: { title, body },
        };
      },
      reducer(state, action) {
        state.title = action.payload.title;
        state.body = action.payload.body;
      },
    },
  },*/
});

export const { createPost } = postSlice.actions;

export default postSlice.reducer;
