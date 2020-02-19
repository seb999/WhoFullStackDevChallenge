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

///////////////////////
//Save Author /////////
///////////////////////
export const saveAuthor = (author) =>{
  return async (dispatch) =>{
    try{
      const res = await axios.post('/api/author/Add/', author);
      dispatch(showAuthorSavedLabel());
      return dispatch(saveAuthorSuccess(res.data));
    }
    catch (error) {
      throw (error)
    }
  }
 }
 
 export const saveAuthorSuccess = (data) => {
  return {
    type: "AUTHOR_SAVED",
    payload: data
  }
 }

 export const showAuthorSavedLabel = () =>{
  return async (dispatch) =>{
    setTimeout(() => {
        dispatch(hideAuthorSavedLabel());
    }, 3000);
  }
}

export const hideAuthorSavedLabel = () =>{
  return {
    type:"AUTHOR_HIDE_SAVED_LABEL"
  }
}

///////////////////
//Update Author ///
///////////////////
export const updateAuthor = (author) =>{
  return async (dispatch) =>{
    try{
      const res = await axios.post('/api/author/Update/', author);
      dispatch(showAuthorUpdatedLabel());
      return dispatch(updateAuthorSuccess(res.data));
    }
    catch (error) {
      throw (error)
    }
  }
 }
 
 export const updateAuthorSuccess = (data) => {
  return {
    type: "AUTHOR_UPDATED",
    payload: data
  }
 }

 export const showAuthorUpdatedLabel = () =>{
  return async (dispatch) =>{
    setTimeout(() => {
        dispatch(hideAuthorUpdatedLabel());
    }, 3000);
  }
}

export const hideAuthorUpdatedLabel = () =>{
  return {
    type:"AUTHOR_HIDE_UPDATED_LABEL"
  }
}

