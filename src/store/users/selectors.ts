import { RootReducerType } from '../rootTypes';

const getUsers = (state: RootReducerType) => state.users.data;
export default getUsers;
