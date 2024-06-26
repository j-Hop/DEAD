import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : 'filters',
    initialState: {
        filters: {
            filters: "all"
        },
    },
    reducers : {
        setFilter : (state, {payload}) => {
            state.filters = payload;
        },
    },
});

export const {setFilter} =  filterSlice.actions;
export const filterReducer = filterSlice.reducer;