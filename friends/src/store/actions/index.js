import { axiosWithAuth } from '../../utils/axiosWithAuth'
import axios from 'axios'

export const FETCHING_FRIENDS_START = 'FETCHING_FRIENDS_START'
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS'
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE'
export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS_START})
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err})
        })
}

export const POSTING_FRIEND_START = 'POSTING_FRIEND_START'
export const POSTING_FRIEND_FAILURE = 'POSTING_FRIEND_FAILURE'
export const POSTING_FRIEND_SUCCESS = 'POSTING_FRIEND_SUCCESS'
export const postFriend = (newFriend) => dispatch => {
    dispatch({ type: POSTING_FRIEND_START})
    axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => {
            console.log(res)
            dispatch({ type: POSTING_FRIEND_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: POSTING_FRIEND_FAILURE, payload: err})
        })
}

export const DELETING_FRIEND_START = 'DELETING_FRIEND_START'
export const DELETING_FRIEND_FAILURE = 'DELETING_FRIEND_FAILURE'
export const DELETING_FRIEND_SUCCESS = 'DELETING_FRIEND_SUCCESS'
export const deleteFriend = (friendId) => dispatch => {
    dispatch({ type: DELETING_FRIEND_START})
    axiosWithAuth()
        .delete(`/friends/${friendId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETING_FRIEND_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: DELETING_FRIEND_FAILURE, payload: err})
        })
}

export const UPDATING_FRIEND_START = 'UPDATING_FRIEND_START'
export const UPDATING_FRIEND_FAILURE = 'UPDATING_FRIEND_FAILURE'
export const UPDATING_FRIEND_SUCCESS = 'UPDATING_FRIEND_SUCCESS'
export const updateFriend = (friendId) => dispatch => {
    dispatch({ type: UPDATING_FRIEND_START})
    axiosWithAuth()
        .put(`/friends/${friendId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATING_FRIEND_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: UPDATING_FRIEND_FAILURE, payload: err})
        })
}