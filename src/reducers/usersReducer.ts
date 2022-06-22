import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { usersData } from '../mock/users';
import { UsersReducer } from '../interfaces/UsersInterfaces/UsersReducer';
import UsersAPI from '../api/users';

export const GetAllUsers: any = createAsyncThunk(
  'users/getAllUsers',
  async () => {
    const { data } = await UsersAPI.getAllUsers();
    return data;
  }
);

export const RegisterUser: any = createAsyncThunk(
  'users/Register',
  async (user) => {
    const { data }: any = await UsersAPI.registerUser(user);
    return data;
  }
);


const initialState: UsersReducer = {
  users: [],
  isAuth: false,
  user: {
    id: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    isAdmin: false,
  },
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onRegister: (state, action) => {
      if (!state.users.find((findUser) => findUser.email === action.payload.email)) {
        state.users = [...state.users, action.payload];
        //console.log('before')
        localStorage.setItem('travel_token', JSON.stringify(action.payload));
        //console.log('after');
        // alert('Account was created successfully');
        // console.log('YES', state.users);
      } else {
        alert('This email has been used before');
      }
    },
    onLogin: (state, action) => {
      state.user = state.users.find((findUser) => findUser.email === action.payload.email
         && findUser.password === action.payload.password);
      //state.user = JSON.parse(localStorage.travel_token)
      if (state.user) {
        state.isAuth = true;
      }
      //if (state.user?.isAdmin) {
       // state.isAdmin = true;
      //}
    },
    onLogOut: (state) => {
      state.isAuth = false;
      //localStorage.clear();
      //state.isAdmin = false;
    },
    fetchUsers: (state) => {
      state.users = usersData;
      state.isAuth = false;
    },
  },
  extraReducers: {
    [GetAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [RegisterUser.fulfilled]: (state, action) => {
      state.users = [...state.users, action.payload]
      console.log(state.users);
    },
  }
});

export const {
  onRegister, onLogin, onLogOut, fetchUsers,
} = usersSlice.actions;
export default usersSlice.reducer;
