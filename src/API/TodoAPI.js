// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import SERVER_API from '../constants/defaultServerAPIUrl';

type Authentication = {
  email: string;
  password: string;
};

type FetchReturn = {
  data?: Object;
  result: string;
  message: Object | string | Array<Object>;
};

const TodoAPI = {
  todoList(username: string): Promise<FetchReturn> {
    return fetchJSON(`/todolist.php?act=list&un=${username}`);
  },
};

export default TodoAPI;
