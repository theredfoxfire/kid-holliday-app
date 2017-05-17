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
  async todoList(username: string): Promise<FetchReturn> {
    return await fetchJSON(`/todolist.php?act=list&un=${username}`);
  },
  async todoDetails(id: string, type: string): Promise<FetchReturn> {
    return await fetchJSON(`/detail.php?act=detail&id=${id}&type=${type}`);
  },
  async addTodo(module: string, module_id: string, user: string): Promise<FetchReturn> {
    return await fetchJSON(`/todolist.php?act=new&un=${user}&module=${module}&module_id=${module_id}`);
  },
  async removeTodo(id: string): Promise<FetchReturn> {
    return await fetchJSON(`/todolist.php?act=remove&id=${id}`);
  },
};

export default TodoAPI;
