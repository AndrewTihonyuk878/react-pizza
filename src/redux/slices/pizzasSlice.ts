import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../store';
import { Sort } from './filterSlice';

type TPizza = {
  id: string, 
  title: string,
  price: number, 
  imageUrl: string, 
  sizes: number[], 
  types: number[], 
  ratings: number
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface PizzaSliceState {
  items: TPizza[],
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING
}

export type TSearchPizzaParams = {
  order: string
  sortBy: string
  category: string
  search: string
  currentPage: string
}

export const fetchPizzas = createAsyncThunk<TPizza[], TSearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const {
      order,
      sortBy,
      category,
      search,
      currentPage
    } = params; 
    const { data } = await axios.get<TPizza[]>(
      `https://63c3c00ff0028bf85f9d322b.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data
  }
)

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
        state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.items = action.payload
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })

  }
})

export const selectPizzaData = (state: RootState) => state.pizzasSlice;

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer