import React from 'react'

const Profile = () => {
  let loggedIn = 1;

  return (
    <div>
        <h1>conditional rendering</h1>
        {/* if else condition if else1 elseif 
 */} 
           {loggedIn===1? <h1>hii</h1> : loggedIn===2? <h1>hello</h1>: <h1>guest</h1>}
    </div>
  )
}

export default Profile
