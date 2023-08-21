import * as api from "../../api";
import {openAlertMessage} from "./alertActions";
export const friendsActions = {
    SET_FRIEND:"FRIENDS.SET_FRIEND",
    SET_PENDING_FRIENDS_INVITATIONS:"FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
    SET_ONLINE_USERS:"FRIENDS.SET_ONLINE_USERS",
}


export const getActions = (dispatch)=>{
    return {
        sendFriendInvitation :(data,closeDialogHandler)=>dispatch(sendFriendInvitation(data,closeDialogHandler))
    }
}

export const setPendingFriendsInvitation = (pendingFriendsInvitations)=>{
    return {
        type:friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitations
    }
}
export const sendFriendInvitation = (data,closeDialogHandler)=>{
    return async (dispatch)=>{
        const response = await api.sendFriendInvitation(data);
        if(response.error){
            dispatch(openAlertMessage(response.errorException?.response?.data?.message))
        }else{
            dispatch(openAlertMessage("Invitation has been sent successfully."));
            closeDialogHandler();
        }
    }
}
