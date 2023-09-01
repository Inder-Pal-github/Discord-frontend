import { setLocalStream } from "../store/actions/roomActions";
import { store } from "../store/store";
const onlyAudioContraints = {
  audio: true,
  video: false,
};
const defaultConstraints = {
  video: true,
  audio: true,
};
export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? onlyAudioContraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      // dispatch the action to set local stream
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((error) => {
      console.log("Error in getting user media", error);
    });
};
