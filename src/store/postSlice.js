import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    allBlogs: [],
    guestPosts: [],
    recentBlogs: [],
    allMagazines:[]
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getAllBlogs: (state, action) => {
            state.allBlogs = [...action.payload.allBlogs];
        },
        getAllMagazines: (state, action) => {
            state.allMagazines = [...action.payload.allMagazines];
        },
        getGuestPosts: (state, action) => {
            state.guestPosts = [...action.payload.guestPosts];
        },
        getRecentBlogs: (state, action)=> {
            state.recentBlogs = [...action.payload.recentBlogs]
        }
    }
})

export const { getAllBlogs,  getAllMagazines, getGuestPosts, getRecentBlogs } = postSlice.actions;

export default postSlice.reducer;