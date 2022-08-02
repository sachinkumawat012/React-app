const redux = require("redux")
// import { legacy_createStore as createStore} from 'redux'
const createStore = redux.legacy_createStore
const applymiddleware = redux.applyMiddleware
const thunkmiddleware = require("redux-thunk").default
const axios = require("axios")

const initialstate = {
    loadin: false,
    data:[],
    error:""
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const fetchusersrequest = ()=> {
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchuserssuccess = (user)=> {
    return{
        type:FETCH_USERS_SUCCESS,
        payload:user,
    }
}

const fetchusersfailure = (error)=> {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                data: [],
                error: action.payload
            }
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchusersrequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            //response.data is the array of the user
            const users = response.data.map(user => user.id)
            dispatch(fetchuserssuccess(users))
        })
        .catch(error=>{
            //  error.massage is the error discription
            dispatch(fetchusersfailure(error.massage ))
        })
    }
}

const store = createStore(reducer, applymiddleware(thunkmiddleware))
store.subscribe = (()=>{console.log(store.getState())})
store.dispatch(fetchUsers())