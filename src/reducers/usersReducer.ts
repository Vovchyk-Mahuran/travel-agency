import { createSlice } from '@reduxjs/toolkit';
import { usersData } from '../mock/users';
import { UsersReducer } from '../interfaces/UsersInterfaces/UsersReducer';


const initialState: UsersReducer = {
  users: [],
  isAuth: false,
  isAdmin: false,
  user: {
    id: '',
    name: '',
    surname: '',
    email: '',
    password: '',
  },
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onRegister: (state, action) => {
      if (!state.users.find((findUser) => findUser.email === action.payload.email)) {
        state.users = [...state.users, action.payload];
        alert('Account was created successfully');
        // console.log('YES', state.users);
      } else {
        alert('This email has been used before');
      }
    },
    onLogin: (state, action) => {
      state.user = state.users.find((findUser) => findUser.email === action.payload.email
        && findUser.password === action.payload.password);
      if (state.user) {
        state.isAuth = true;
        // console.log('YES', state.isAuth, state.user);
      }
      if (state.user?.email === 'admin@gmail.com' && state.user.password === 'admin') {
        state.isAdmin = true;
      }
    },
    onLogOut: (state) => {
      state.isAuth = false;
      state.isAdmin = false;
    },
    fetchUsers: (state) => {
      state.users = usersData;
      state.isAuth = false;
    },
  },
});

export const {
  onRegister, onLogin, onLogOut, fetchUsers,
} = usersSlice.actions;
export default usersSlice.reducer;
