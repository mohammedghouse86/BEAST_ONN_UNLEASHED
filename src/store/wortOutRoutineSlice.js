import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { "id" : 101 ,
      "type" : "right arm curls",
      "reps" : 0 },
    { "id" : 102 ,
      "type" : "left arm curls",
      "reps" : 0 }];

const workOutRoutineSlice = createSlice({
  name: 'reps',
  initialState,
  reducers: {
    add_rep(state, action) {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1 && state[itemIndex].reps<5) {
        state[itemIndex].reps = state[itemIndex].reps + 1;
      }
    }
  }
});

export const { add_rep } = workOutRoutineSlice.actions;
export default workOutRoutineSlice.reducer;
