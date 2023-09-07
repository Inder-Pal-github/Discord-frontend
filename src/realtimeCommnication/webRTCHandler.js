import { setLocalStream } from "../store/actions/roomActions";
import { store } from "../store/store";
import Peer from "simple-peer"

const onlyAudioContraints = {
  audio: true,
  video: false,
};
const defaultConstraints = {
  video: true,
  audio: true,
};

const getConfiguration = ()=>{
  const turnIceServers = null;
  if(turnIceServers){
    // TODO user TURN server credentials
  }else{
    console.warn("Using only STUN server")
    return {
      iceServers:[
        {
          urls:'stun:stun.1.google.com:19302'
        }
      ]
    }
  }
}

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

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;
  if (isInitiator) {
    console.log(`preparing new peer connection as initiator`);
  } else {
    console.log(`preparing new peer connection not as initiator`);
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config:getConfiguration(),
    stream:localStream
  })

  peers[connUserSocketId].on('signal',data => {
    console.log(`${connUserSocketId}: signaling data ${JSON.stringify(data)}`)
    const signalData = {
      signal:data,
      connUserSocketId:connUserSocketId
    }

    // TODO: 
    // pass signaling data to other user
    // socketConnection.signalPeerData(signalData);
  })

  peers[connUserSocketId].on("stream",(remoteStream)=>{
    // TODO:
    // add new remote stream to our server store
  })
};
