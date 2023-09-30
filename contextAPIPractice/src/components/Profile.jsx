import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (user==null){ return <div>please login</div>}
else{
    return <div>Welcome {user.username}</div>}
}

export default Profile