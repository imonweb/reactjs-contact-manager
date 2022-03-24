import React, { Component } from 'react'

class AddContact extends Component {
  render() {
    return (
      <div className='ui main'>
        <h2>AddContact</h2>
          <form className="ui form">

            <div className="field">
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder='Name' />
            </div>

            <div className="field">
              <label htmlFor="">Email</label>
              <input type="text" name="email" placeholder='Email' />
            </div>

            <button className="ui button blue">Add</button>

          </form>
      </div>
    )
  }
}

export default AddContact