const initState = {
  authorList: [],
  courseList: [],
  studentList: [],
  course: {},
  isCourseSaved: false,
  isStudentSaved: false,
  isStudentCourseSaved: false,
  isAuthorSaved: false,
  isAuthorUpdated: false,
  isCourseUpdated: false,
}

const rootReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {

    case "GET_COURSE_LIST":
      newState.courseList = action.payload;
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

    case "COURSE_SAVED":
      newState.isCourseSaved = true;
      newState.courseList = action.payload
      return newState;

    case "COURSE_UPDATED":
      newState.isCourseUpdated = true;
      newState.courseList = action.payload
      return newState;

    case "COURSE_HIDE_SAVED_LABEL":
      newState.isCourseSaved = false;
      return newState;

      case "COURSE_HIDE_UPDATED_LABEL":
        newState.isCourseUpdated = false;
        return newState;

    case "STUDENT_COURSE_SAVED":
      newState.isStudentCourseSaved = true;
      newState.studentList = action.payload
      return newState;

    case "STUDENT_COURSE_HIDE_SAVED_LABEL":
      newState.isStudentCourseSaved = false;
      return newState;

    case "STUDENT_SAVED":
      newState.isStudentSaved = true;
      newState.studentList = action.payload
      return newState;

    case "STUDENT_HIDE_SAVED_LABEL":
      newState.isStudentSaved = false;
      return newState;

    case "AUTHOR_SAVED":
      newState.isAuthorSaved = true;
      newState.authorList = action.payload
      return newState;

    case "AUTHOR_UPDATED":
      newState.isAuthorUpdated = true;
      newState.authorList = action.payload
      return newState;

    case "AUTHOR_HIDE_SAVED_LABEL":
      newState.isAuthorSaved = false;
      return newState;

    case "AUTHOR_HIDE_UPDATED_LABEL":
      newState.isAuthorUpdated = false;
      return newState;

    default:
      return state;
  }
}

export default rootReducer