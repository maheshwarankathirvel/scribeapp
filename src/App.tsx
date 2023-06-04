import LoginPage from "./pages/LoginPage";
import {useState} from "react";
import LandingPage from "./pages/LandingPage";
import NavigationMenuProvider from "./context/NavigationBar";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const loginSubmitOnClickHandler = () => {
        setIsAuthenticated(true)
    }

    return (
        <div>
            {isAuthenticated ?
                (<NavigationMenuProvider>
                    <LandingPage/>
                </NavigationMenuProvider>) :
                <LoginPage onClick={loginSubmitOnClickHandler}/>}
        </div>
    );
}

export default App;
