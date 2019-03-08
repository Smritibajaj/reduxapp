// a reducer takes 2 things 
//1. the action(info about what happened )
//2.copy of current state
function posts(state = [],action){
    console.log(state,action);
    //take a copy
    switch(action.type){
        case 'INCREMENT_LIKES':
        console.log('Increment Likes');
        const i = action.index;
        return [
            ...state.slice(0,i),// before the one we are updating
            {...state[i], likes:state[i].likes + 1},
            ...state.slice(i+1),//after the one we are updating

        ]
    }
    return state;
}
export default posts;
