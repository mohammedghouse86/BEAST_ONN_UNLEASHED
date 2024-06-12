import { configureStore } from "@reduxjs/toolkit";
import workOutRoutineSlice from '../store/wortOutRoutineSlice';

const store = configureStore({
    reducer:{
        reps:workOutRoutineSlice
    }
});
export default store;