import { combineReducers } from "redux";

import register from "./register&login";
import spotifyAccessReducer from "./spotifyAccess.reducer";
import playbackReducer from "./playback.reducer";

export default combineReducers({
  register,
  spotifyAccessReducer,
  playbackReducer,
});
