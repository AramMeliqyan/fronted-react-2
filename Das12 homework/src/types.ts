export interface IUser{
    id:number
    name:string
    age:number
    salary:number
    isMarried?:boolean
}

export interface IContext {
    users: IUser[]
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
    removeUser: (id: number) => void
  }

 export type NewUser = Omit<IUser, 'id'>