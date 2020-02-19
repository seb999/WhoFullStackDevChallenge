import axios from 'axios';

export const getAuthorList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/author/');
      return dispatch(getAuthorListSuccess(res.data));
    }
    catch (error) {
      throw (error)
    }
  }
}

export const getAuthorListSuccess = (data) => {
  return {
    type: "GET_AUTHOR_LIST",
    payload: data
  }
}