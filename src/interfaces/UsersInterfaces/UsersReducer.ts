import { User } from './User';

export interface UsersReducer {
  users: Array<User>,
  isAuth: boolean,
  user: User | undefined,
}