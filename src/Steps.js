Steps:
<ul>
  <li>
    Create Multiple components
    - Header
    - AddContact 
    - ContactList 
    - ContactCard
  </li>
</ul> 


 
/* ======  AddContact.js   ====== */
- Create component 

class AddContact extends React.Component { render() { return ( <div></div>) }}

- Create a form 
- Create input name and email 
- Create a button 


 
/* ====== ContactList.js ====== */
const  = () => { return (  ); } export default;



 
/* ====== App.js ====== */
/* Rendering List */
- Create a list of contacts as array (id, name, email)
<Header />
<AddContact />
<ContactList />
 
/* Props - Pass data from parent to child   */
<ContactList contacts={contacts}/>
 
 
 /* ====== ContactList.js ====== */
const ContactList = (props) => {
  console.log(props);
}

- Create a function and render the list

const renderContactList = props.contacts.map((contact) => {
  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div><i className="trash alternate outline icon"></i></div>
    </div>
  )
})

- Reference variable in jsx (Note: no parenthesis)

return <div>{renderContactList}</div>

 
/* ====== ContactCard.js ====== */
- Move the contents of contactList here and add the props

const ContactCard = (props) => {
  return (
      <div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div><i className="trash alternate outline icon"></i></div>
    </div>
  )
}

 /* ====== ContactList.js ====== */
 - Import the ContactCard
import ContactCard from './ContactCard'

const renderContactList = props.contacts.map((contact) => {
  return (
    <ContactCard contact={contact}/>
  )
})

return <div>{renderContactList}</div>


/* ====== ContactCard.js ====== */
- Use destructuring
- import image

import user from '../images/user.png'

const ContactCard = (props) => {
  const {id, name, email} = props.contact;
  return (
    <div>
      <img src={user} alt="user" className="ui avatar image" />
      <div>{name}</div>
      <div>{email}</div>
      <div><i className="trash alternate outline icon"></i></div>
    </div>
  )
}


/* ====== App.js ====== */
- Build the functionality
- Remove the contact list array 
- Add useState Hook

import React, { useSate } from 'react';

function App() {
const [contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {

}

  return (

  )
}

 
/* ====== AddContacts.js ====== */
- Create a state

