import React from 'react'
import {styled} from "@mui/material"
import PendingInvitationsListItem from './PendingInvitationsListItem'

const DUMMY_INVITATIONS = [
  {
    _id:1,
    senderId:{
      username:"Mark",
      mail:"dummy@gmail.com"
    }
  },
  {
    _id:2,
    senderId:{
      username:"John",
      mail:"john@gmail.com"
    }
  },
  // {
  //   _id:3,
  //   senderId:{
  //     username:"Ruck",
  //     mail:"ruck@gmail.com"
  //   }
  // }
]

const MainContainer = styled("div")({
    width:"100%",
    height:"22%",
    flexDirection:"column",
    alignItems:"center",
    overflow:"auto"

})

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {
        DUMMY_INVITATIONS?.map((invitation)=>{
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

export default PendingInvitationsList