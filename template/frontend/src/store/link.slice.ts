
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState= {
    data: {
        id:"",
        original_url: "",
        short_url: ""
    }
}


export const postList = createAsyncThunk(
    "post/postList",
    async(data:{original_url:string}) => {
        const response = await axios.post("http://localhost:8000/url/links", data)
        return response.data
    }
)

export const getShortLink = createAsyncThunk(
    "post/getShortLink",
    async(data:string) => {
        console.log(data)
        await axios.get(`http://localhost:8000/url/${data}`)
        return
    }
)




const LinkSlice = createSlice({
    name: "link",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(postList.pending, () => {
                console.log("pending")
            })
            .addCase(postList.rejected, () => {
                console.log("Error")
            })
            .addCase(postList.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})
export default LinkSlice.reducer
