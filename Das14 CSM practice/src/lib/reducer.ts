import { Action, ActionTypes, FilterTypes, IEvent, IState } from "./Types"

export const reducer = (state:IState, action:Action):IState => {
    switch(action.type){
        case ActionTypes.SetEvents:
            return {
                ...state,
                events:action.payload as IEvent[]
            }
        case ActionTypes.SetFilter:
            return{
                ...state,
                curentFilter:action.payload as FilterTypes
            }
        default:
            return state
    }
}