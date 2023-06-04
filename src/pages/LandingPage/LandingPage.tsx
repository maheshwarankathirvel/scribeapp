import NavigationBar from "../../components/NavigationBar";
import Header from "../../components/Header";
import RaiseEvent from "../../components/RaiseEvent";
import {useActiveMenu} from "../../context/NavigationBar/NavigationBarContext";

const LandingPage = () => {
    const {activeMenu} = useActiveMenu()
    return (
        <div>
            <Header/>
            <NavigationBar/>
            {activeMenu === "RaiseEvent" && <RaiseEvent/>}
        </div>
    )
}

export default LandingPage