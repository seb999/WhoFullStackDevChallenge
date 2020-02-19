const initState = {
  authorList: [],
  courseList: [],
  studentList: [],
  course:{},
  isCourseSaved: false
}

const rootReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {

    case "GET_COURSE_LIST":
      newState.courseList = action.payload;
      return newState;

    case "COURSE_SAVED":
      newState.isCourseSaved = true;
      newState.courseList = action.payload
      return newState;

      case "GET_STUDENT_LIST":
      newState.studentList = action.payload;
      return newState;

    case "GET_AUTHOR_LIST":
      newState.authorList = action.payload;
      return newState;

      case "GET_COURSE":
        newState.course = action.payload;
        return newState;
      

    default:
      return state;
  }
}

export default rootReducer