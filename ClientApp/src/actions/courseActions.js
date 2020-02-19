import axios from 'axios'; 

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

   export const saveCourse = (course) =>{
    return async (dispatch) =>{
      try{
        const res = await axios.post('/api/course/Add/', course);
        return dispatch(saveCourseSuccess(res.data));
      }
      catch (error) {
        throw (error)
      }
    }
   }
   
   export const saveCourseSuccess = (data) => {
    return {
      type: "COURSE_SAVED",
      payload: data
    }
   }