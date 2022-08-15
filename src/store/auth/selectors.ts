import { RootReducerType } from '../rootTypes';

const GetUserName = (state: RootReducerType) => state.auth.name;

export default GetUserName;
