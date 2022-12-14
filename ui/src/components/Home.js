import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
const Home = () => {
    const {user, logout} = useContext(UserContext);
    return (
        <div className="home">
            <h1>{user.name}<br/><span>{user.email}</span><span>{user.id}</span></h1>
            <button onClick={logout} className="logout">Logout</button>
        </div>
    )
}

export default Home;
