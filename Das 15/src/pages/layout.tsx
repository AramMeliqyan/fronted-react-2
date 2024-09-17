import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return <div>
        {/* <p>Layout</p> */}
        <nav>
           <Link to = "/">Home</Link>
           <Link to = "/add">Add</Link>
        </nav>
        <div style={{padding:10,background:"grey",height:400,width:600}}>

            <Outlet/>
        </div>
    </div>
}