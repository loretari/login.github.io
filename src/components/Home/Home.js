import React, { useContext} from 'react'
import classes from './Home.module.css'
import Card from '../UI/Card/Card'
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const Home = (props) => {
    const authCtx = useContext(AuthContext);


    return (
        <Card className = {classes.home}>
        <h1>Welcome back!</h1>
            <Button onClick ={authCtx.onLogout}>Logout</Button>

            <button onClick ={authCtx.onLogout}>Logout</button>
    </Card>
    )

}

export default Home;