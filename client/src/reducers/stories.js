const storyReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_STORIES":
    case "CREATE_STORY":
      return state;
    default:
      break;
  }
};

export default storyReducer;