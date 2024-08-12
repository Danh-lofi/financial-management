import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '../../@type/slice/user';

// ----------------------------------------------------------------------

const initialState: IUser = {
  id: '',
  name: '',
  phone: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
    //   .addCase(getListUser.fulfilled, (state, action) => {
    //     state.userList = action.payload.items;
    //     state.userCount = action.payload.totalRow;
    //   })
  },
});
export default slice.reducer;
