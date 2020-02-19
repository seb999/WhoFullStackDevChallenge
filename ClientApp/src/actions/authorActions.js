import axios from 'axios';

export const getAuthorList = () =>{
    return async (dispatch) =>{
      try{
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

  //  export const saveCourse = (course) =>{
  //    console.log(course);
  //   return async (dispatch) =>{
  //     try{
  //       const res = await axios.post('/api/course/Add/', course);
  //       return dispatch(saveCourseSuccess(res.data));
  //     }
  //     catch (error) {
  //       throw (error)
  //     }
  //   }
  //  }
   
  //  export const saveCourseSuccess = (data) => {
  //   return {
  //     type: "COURSE_SAVED",
  //     payload: data
  //   }
  //  }