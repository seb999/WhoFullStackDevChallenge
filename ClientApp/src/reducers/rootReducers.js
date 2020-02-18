const initState = {
    courseList: [],
  }

  const rootReducer = (state = initState, action) => {
    const newState = { ...state };
    switch (action.type) {
  
      case "GET_COURSE_LIST":
        newState.courseList = action.payload;
        return newState;

      default:
        return state;
    }
  }
  
  export default rootReducer