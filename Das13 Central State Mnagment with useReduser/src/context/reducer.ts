import { IAction, IState } from "./types";

export const reducer = (state: IState, action: IAction): IState => {
    switch(action.type) {
        case 'users/delete': 
                return {
                    ...state,
                    users: state.users.filter(user => user.id == action.payload)
                }

        default:
            return state
    }
}