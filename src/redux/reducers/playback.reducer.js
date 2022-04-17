import { PLAY } from "../actions/playback.action";

const initialState = {
  playSong: "",
};

const playbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return { ...state, playSong: action.payload };
    default:
      return state;
  }
};

export default playbackReducer;
