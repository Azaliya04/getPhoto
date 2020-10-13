import axios from "axios";
import { FETCH_IMG_SUCCESS } from "./actionTypes";

export function fetchImg() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=80d0cf5bb3998d2e51cc12f5d707fede&user_id=185307336%40N02&format=json&nojsoncallback=1"
      );

      dispatch(fetchImgSuccess(response));
    } catch (e) {
      console.log(e);
    }
  };
}

export function fetchImgSuccess(response) {
  return {
    type: FETCH_IMG_SUCCESS,
    response,
  };
}
