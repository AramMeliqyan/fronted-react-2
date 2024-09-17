import { useContext } from "react"
import { deleteEvent } from "../lib/Api"
import { ActionTypes, IEvent } from "../lib/Types"
import { Context } from "../lib/Context"

interface IProps{
    event:IEvent
}
export const Event:React.FC<IProps> = ({event}) => {
    const context = useContext(Context)
    if(!context){
        throw new Error("error")
    }

    const {dispatch} = context
    
    const handleRemoveEvent = (id:number|string):void => {
        deleteEvent(id)
        .then(response =>{
            dispatch({type:ActionTypes.RemoveEvent,payload:response.id})
            
        })
    }
    return <div>
        <img src={event.cover} />
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
        <button onClick={()=>handleRemoveEvent(event.id)}>delete</button>
    </div>
}


