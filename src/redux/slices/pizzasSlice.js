import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const {
      order,
      sortBy,
      category,
      search,
      currentPage
    } = params; 
    const { data } = await axios.get(
      `https://63c3c00ff0028bf85f9d322b.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data
  }
)

const initialState = {
  items: [],
  status: 'loading'
}

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
        state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    }
  }
})

export const selectPizzaData = (state) => state.pizzasSlice;

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer