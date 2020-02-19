import axios from 'axios';

export const getCourseList = () => {
  return async (dispatch) => {
    try {
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

////////////////////
//Save new course //
////////////////////
export const saveCourse = (course) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/course/Add/', course);
      dispatch(showCourseSavedLabel());
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

export const showCourseSavedLabel = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(hideCourseSavedLabel());
    }, 3000);
  }
}

export const hideCourseSavedLabel = () => {
  return {
    type: "COURSE_HIDE_SAVED_LABEL"
  }
}

///////////////////
//Update Course ///
///////////////////
export const updateCourse = (course) =>{
  return async (dispatch) =>{
    try{
      const res = await axios.post('/api/course/Update/', course);
      dispatch(showCourseUpdatedLabel());
      return dispatch(updateCourseSuccess(res.data));
    }
    catch (error) {
      throw (error)
    }
  }
 }
 
 export const updateCourseSuccess = (data) => {
  return {
    type: "COURSE_UPDATED",
    payload: data
  }
 }

 export const showCourseUpdatedLabel = () =>{
  return async (dispatch) =>{
    setTimeout(() => {
        dispatch(hideCourseUpdatedLabel());
    }, 3000);
  }
}

export const hideCourseUpdatedLabel = () =>{
  return {
    type:"COURSE_HIDE_UPDATED_LABEL"
  }
}

/////////////////////
//Get course detail//
/////////////////////
export const getCourse = (courseId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/course/' + courseId);
      return dispatch(getCourseSuccess(res.data));
    }
    catch (error) {
      throw (error)
    }
  }
}

export const getCourseSuccess = (data) => {
  return {
    type: "GET_COURSE",
    payload: data
  }
}

