import {
    FETCHING_FRIENDS_START, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, POSTING_FRIEND_START, POSTING_FRIEND_SUCCESS, POSTING_FRIEND_FAILURE, DELETING_FRIEND_START, DELETING_FRIEND_SUCCESS, DELETING_FRIEND_FAILURE
} from '../actions'

const initialState = {
    friends: [],
    isFetching: false,
    error: ''
};

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_FRIENDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case FETCHING_FRIENDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to load friend list: ${action.payload}`
            }
        case POSTING_FRIEND_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case POSTING_FRIEND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case POSTING_FRIEND_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to post to friend list: ${action.payload}`
            }
        case DELETING_FRIEND_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case DELETING_FRIEND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case DELETING_FRIEND_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to delete Smurf: ${action.payload}`
            }
        default:
            return state
    }
}