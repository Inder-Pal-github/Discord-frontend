import React from 'react'
import {styled} from "@mui/material"
import PendingInvitationsListItem from './PendingInvitationsListItem'
import {connect} from "react-redux"


const MainContainer = styled("div")({
    width:"100%",
    height:"22%",
    flexDirection:"column",
    alignItems:"center",
    overflow:"auto"

})

const PendingInvitationsList = ({pendingFriendsInvitations}) => {
  return (
    <MainContainer>
      {
        pendingFriendsInvitations?.map((invitation)=>{
          return <PendingInvitationsListItem
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        })
      }
    </MainContainer>
  )
}

const mapStoreStateToProps = ({friends})=>{
  return {
    ...friends
  }
}
export default connect(null,mapStoreStateToProps)(PendingInvitationsList);