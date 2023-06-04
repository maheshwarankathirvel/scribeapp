import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from '../../components/LoginForm';
import LoginPoster from "../../components/LoginPoster";
import "./LoginPage.css"

const LoginPage = ({onClick}: { onClick: () => void }) => {
    return (
        <div className={"loginPageContainer"}>
            <LoginPoster/>
            <LoginForm onClick={onClick}/>
        </div>
    )
}

export default LoginPage