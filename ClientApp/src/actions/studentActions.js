import axios from 'axios'; 

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

   export const saveStudent = (student) =>{
    return async (dispatch) =>{
      try{
        const res = await axios.post('/api/student/Add/', student);
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

   export const saveStudentCourse = (courseId, studentId) =>{
    return async (dispatch) =>{
      try{
        const res = await axios.put('/api/studentCourse/'+ courseId + '/' + studentId);
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