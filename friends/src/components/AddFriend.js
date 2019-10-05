import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postFriend } from '../store/actions'

function AddFriend({ postFriend }) {
    const [newFriendName, setNewFriendName] = useState('')
    const [newFriendAge, setNewFriendAge] = useState('')
    const [newFriendEmail, setNewFriendEmail] = useState('')

    const addFriend = (e) => {
        e.preventDefault()
        let newFriend = {
            name: newFriendName,
            age: newFriendAge,
            email: newFriendEmail
        }
        postFriend(newFriend)
    }
    return (
        <form onSubmit={addFriend}>
            <h2>Add Your Friend</h2>
            <input
                type="text"
                name="name"
                value={newFriendName}
                placeholder="name"
                onChange={(e) => {setNewFriendName(e.target.value)}}
            />
            <input
                type="text"
                name="age"
                value={newFriendAge}
                placeholder="age"
                onChange={(e) => {setNewFriendAge(e.target.value)}}
            />
            <input
                type="email"
                name="email"
                value={newFriendEmail}
                placeholder="mail@email.com"
                onChange={(e) => {setNewFriendEmail(e.target.value)}}
            />
            <button>Add Friend</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      friends: state.friends,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { postFriend })(AddFriend)