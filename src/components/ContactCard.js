import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {

  const {id, name, email} = props.contact;

  return (
     <div className="item">
       <img src={user} alt="user" className="ui avatar image" />
        <div className="content">
          <div className="header">{ name }</div>
          <div>{email}</div>
        </div>
        <span>
          <i className="trash alternate outline icon" 
          style={{
            color:"red", 
            marginTop: "7px",
            display: "flex",
          }}
          ></i> 
        </span>
     </div>
  )
}

export default ContactCard