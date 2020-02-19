import axios from 'axios'; 

////////////////////
//Get Student list//
////////////////////
export const getStudentList = () =>{
    return async (dispatch) =>{
      try{
        const res = await axios.get('/api/student/');
        return dispatch(getStudentListSuccess(res.data));
      }
      catch (error) {
        throw (error)
      }
    }
   }
   
   export const getStudentListSuccess = (data) => {
    return {
      type: "GET_STUDENT_LIST",
      payload: data
    }
   }

////////////////
//Save Student//
////////////////
   export const saveStudent = (student) =>{
    return async (dispatch) =>{
      try{
        const res = await axios.post('/api/student/Add/', student);
        dispatch(showStudentSavedLabel());
        return dispatch(saveStudentSuccess(res.data));
      }
      catch (error) {
        throw (error)
      }
    }
   }
   
   export const saveStudentSuccess = (data) => {
    return {
      type: "STUDENT_SAVED",
      payload: data
    }
   }

   export const showStudentSavedLabel = () =>{
    return async (dispatch) =>{
      setTimeout(() => {
          dispatch(hideStudentSavedLabel());
      }, 3000);
    }
  }
  
  export const hideStudentSavedLabel = () =>{
    return {
      type:"STUDENT_HIDE_SAVED_LABEL"
    }
  }
///////////////////////
//Save Student course//
///////////////////////
   export const saveStudentCourse = (courseId, studentId) =>{
    return async (dispatch) =>{
      try{
        const res = await axios.put('/api/studentCourse/'+ courseId + '/' + studentId);
        dispatch(showStudentCourseSavedLabel());
        return dispatch(saveStudentCourseSuccess(res.data));
      }
      catch (error) {
        throw (error)
      }
    }
   }
   
   export const saveStudentCourseSuccess = (data) => {
    return {
      type: "STUDENT_COURSE_SAVED",
      payload: data
    }
   }

   export const showStudentCourseSavedLabel = () =>{
    return async (dispatch) =>{
      setTimeout(() => {
          dispatch(hideStudentCourseSavedLabel());
      }, 3000);
    }
  }
  
  export const hideStudentCourseSavedLabel = () =>{
    return {
      type:"STUDENT_COURSE_HIDE_SAVED_LABEL"
    }
  }