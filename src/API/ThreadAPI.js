// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import type {EditThread, CreateThread} from '../types/Forum';

type Item = {
  type: 'thread' | 'comment';
  id: string;
};

type Comment = {
  thread_id: string;
  post: string;
};

let ThreadAPI = {
  editThread(token: string, id: string) {
    return fetchJSON(`/editthread?thread_id=${id}&token=${token}`);
  },
  async threadComments(token: string, id: string, page: number) {
    let result = await fetchJSON(`/threadcomment?token=${token}&thread_id=${id}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async likeForumItem(token: string, item: Item) {
    let urlEncoded = formatUrlEncoded(item);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/like?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async updateThread(token: string, thread: EditThread) {
    let formData = new FormData();
    let {threadID, categoryID, subCategoryID, title, description, photo} = thread;
    if (photo) {
      formData.append('photo', {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type,
      });
    }
    formData.append('thread_id', threadID);
    formData.append('category', categoryID);
    formData.append('sub_category', subCategoryID);
    formData.append('title', title);
    formData.append('desc', description);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };
    let result = await fetchJSON(`/updatethread?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async deleteThread(token: string, threadID: string) {
    let urlEncoded = formatUrlEncoded({thread_id: threadID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/deletethread?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async postComment(token: string, comment: Comment) {
    let urlEncoded = formatUrlEncoded(comment);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/storecomment?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getUserThreads(token: string, page: number) {
    let result = await fetchJSON(`/forumuser?token=${token}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getThreadDetail(token: string, threadID: number) {
    let result = await fetchJSON(`/detailthread/${threadID}?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getOtherThreads(token: string, page: number, forum: string) {
    let result = await fetchJSON(`/otherforum?token=${token}&page=${page}&forum=${forum}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getAllForum() {
    let result = await fetchJSON(`/getallforum`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getForumCategories(token: string) {
    let result = await fetchJSON(`/forumcategories/petani?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getForumSubCategories(token: string, forumCategoryID: string) {
    let result = await fetchJSON(`/getforumsubcategory/${forumCategoryID}?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async postThread(token: string, thread: CreateThread) {
    let formData = new FormData();
    let {categoryID, subCategoryID, title, description, photo} = thread;
    if (photo) {
      formData.append('photo', {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type,
      });
    }
    formData.append('category', categoryID);
    formData.append('sub_category', subCategoryID);
    formData.append('title', title);
    formData.append('desc', description);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };
    let result = await fetchJSON(`/storethread?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getFilterThreadCategories(token: string, forumCategory: string) {
    let result = await fetchJSON(`/forumcategories/${forumCategory}?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async filterThreads(token: string, forumCategory: string, threadCategory: string, sortBy: string, page: number) {
    let urlEncoded = formatUrlEncoded({forum: forumCategory, category: threadCategory, sort: sortBy, page});
    let result = await fetchJSON(`/filterforum?token=${token}&${urlEncoded}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async searchThreads(token: string, forumCategory: string, query: string, page: number) {
    let urlEncoded = formatUrlEncoded({forum: forumCategory, q: query, page});
    let result = await fetchJSON(`/searchforum?token=${token}&${urlEncoded}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async reportForumItem(token: string, report: string, threadID: number, commentID: number) {
    let urlEncoded = commentID ?
      formatUrlEncoded({report, id_thread: threadID, id_comment: commentID}) :
      formatUrlEncoded({report, id_thread: threadID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/userreport?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getUserGroupList(token: string) {
    let result = await fetchJSON(`/joinedgroup?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getGroupList(token: string) {
    let result = await fetchJSON(`/listgroups?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getInvitationGroupList(token: string) {
    let result = await fetchJSON(`/invitegroup?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async searchGroups(token: string, key: string, type: string) {
    let urlEncoded = formatUrlEncoded({key, type});
    let result = await fetchJSON(`/searchgroups?token=${token}&${urlEncoded}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async requestJoinGroup(token: string, groupID: number) {
    let urlEncoded = formatUrlEncoded({id: groupID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/request?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async confirmInvite(token: string, groupID: number) {
    // TODO: check if it's correctly working bc right now we don't have any group invitations
    let urlEncoded = formatUrlEncoded({group_id: groupID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/confirminvite?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getGroupDetail(token: string, groupID: number) {
    let result = await fetchJSON(`/otherforumpakar/${groupID}?token=${token}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getGroupMembers(token: string, groupID: number, page: number) {
    let result = await fetchJSON(`/membersgroup/${groupID}?token=${token}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getGroupThreads(token: string, groupID: number, page: number) {
    let result = await fetchJSON(`/threadsgroup/${groupID}?token=${token}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
};

export default ThreadAPI;
