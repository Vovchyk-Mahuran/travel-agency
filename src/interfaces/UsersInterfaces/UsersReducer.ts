import { User } from './User';

export interface UsersReducer {
  users: Array<User>,
  isAuth: boolean,
  isAdmin: boolean,
  user: User | undefined,
}