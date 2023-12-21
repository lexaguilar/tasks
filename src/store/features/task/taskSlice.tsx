import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import ITasksState from '../../../models/taks';

const initialState: Array<ITasksState> = [
   
]


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
      add: (state, action: PayloadAction<ITasksState>) => {

        state.push(action.payload);
       
      },
      remove: (state, action: PayloadAction<number>) => {
        return state.filter((item, index) => index !== action.payload)
      },
      setCompleted: (state, action: PayloadAction<number>) => {

        state.map((item, index) => {
            if(index === action.payload){
                item.completed = !item.completed;
            }
        });

      },
    },
  })

  export const { add, remove, setCompleted } = taskSlice.actions

  export default taskSlice.reducer

