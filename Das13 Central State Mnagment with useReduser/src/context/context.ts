import React from "react";
import { IContext, IState } from "./types";

export const initialState:IState ={
    users:[
        {id:100,name:"Vazgen",age:16,salary:120000},
        {id:101,name:"Karen",age:18,salary:150000},
        {id:102,name:"Xachik",age:22,salary:200000}
    ]
}

export const UserContext = React.createContext<IContext|undefined>(undefined)


