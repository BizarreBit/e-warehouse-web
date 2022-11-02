import axios from '../config/axios';

export const getGroupApi = () => axios.get('/groups');
export const createGroupApi = (input) => axios.post('/groups', input);
export const editGroupApi = (group, input) => {
  if (group.name !== input.name) {
    return axios.patch(`/groups/${group.id}`, input);
  }
};
export const deleteGroupApi = (groupid) => axios.delete(`/groups/${groupid}`);
