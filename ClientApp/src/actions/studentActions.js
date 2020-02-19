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
      type: "COURSE_SAVED",
      payload: data
    }
   }

   export const getStudent = (studentId) =>{
    return async (dispatch) =>{
      try{
        const res = await axios.get('/api/student/'+ studentId);
        return dispatch(getStudentSuccess(res.data));
      }
      catch (error) {
        throw (error)
      }
    }
   }
   
   export const getStudentSuccess = (data) => {
    console.log(data);
    return {
      type: "GET_STUDENT",
      payload: data
    }
   }