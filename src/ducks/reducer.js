const initialState = {
    page: '/',
    nav: 'nav-block'
}

const CHANGE_PAGE = 'CHANGE_PAGE';


export function changePage(thing){
    return {
        type: CHANGE_PAGE,
        payload: thing
    }
}



export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case CHANGE_PAGE:
            return{
                ...state,
                page: payload.page,
                nav: payload.nav
            }
        default: return state;
    }
}