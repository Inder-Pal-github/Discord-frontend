import {store} from "../../store/store";
import { setMessages } from "../../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data) => {
    const {participants,messages} = data;
    // find Id  of users from token and id from active conversation.
    const receiverId  = store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.userDetails.userDetails._id;
    if(receiverId&&userId){
        const usersInConversation =  [receiverId,userId];
        updateChatHistoryIfSameConversationActive({
            participants,
            usersInConversation,
            messages
        })
    }

};

const updateChatHistoryIfSameConversationActive = ({participants,usersInConversation,messages})=>{

    const result = participants.every(function(participantId){
        return usersInConversation.includes(participantId);
    })
    console.log(result,participants,usersInConversation,messages);
    if(result){
        // console.log(messages);
        store.dispatch(setMessages(messages));
    }
}

