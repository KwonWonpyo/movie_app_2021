import { createStore } from 'redux';
export default createStore(function(state, action){
    console.log(state, action);
    if(state === undefined){
        return {
            sort_by: "rating",
            limit: 20,
            genre: "",
            query_term: "0",
        }
    }
    if(action.type === "SAVE"){
        return {
            ...state,
            sort_by: action.state.sort_by,
            limit: action.state.limit,
            genre: action.state.genre,
            query_term: action.state.query_term,
        }
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())