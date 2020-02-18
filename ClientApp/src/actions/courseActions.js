import axios from 'axios';
const apiUrl = '/api/cou/';    

export const getCourseList = () =>{
    return async (dispatch) =>{
      try{
        const res = await axios.get('/api/course/');
        return dispatch(getCourseListSuccess(res.data));
      }
      catch (error) {
        throw (error)
      }
    }
   }
   
   export const getCourseListSuccess = (data) => {
    return {
      type: "GET_COURSE_LIST",
      payload: data
    }
   }