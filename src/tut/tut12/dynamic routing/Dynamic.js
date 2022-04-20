import React from 'react';
import { NavLink} from 'react-router-dom';



const Dynamic = () => {
    let users = [
        { id: 1, name: "rajat", email: 'rjt@rjt.com' },
        { id: 2, name: "kannu", email: 'kannu@rjt.com' },
        { id: 3, name: "guddu", email: 'guddu@rjt.com' },
        { id: 4, name: "shubham", email: 'shubham@rjt.com' },
        { id: 5, name: "akki", email: 'akki@rjt.com' },
    ]
    
    return (
        <div>
        
            <h1>dynamic routing</h1>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <NavLink
                             style={({isActive})=>{
                              return { color : isActive? "Tomato": ""
                             }}}
                             to={"/users/" + user.id+"/"+user.name}> <h3> {user.name}</h3>   </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dynamic