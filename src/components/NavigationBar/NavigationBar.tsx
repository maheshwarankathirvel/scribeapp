import "./NavigationBar.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import {useActiveMenu} from "../../context/NavigationBar/NavigationBarContext";

const NavigationBar = () => {
    const {setActiveMenu} = useActiveMenu();

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column vertical-nav">
                        <NavButton onCLickHandler={() => setActiveMenu('DashBoard')}
                                   name={"Dashboard"}><GridViewOutlinedIcon/></NavButton>
                        <NavButton onCLickHandler={() => setActiveMenu('BookScribe')}
                                   name={"Book Scribe"}><BookOnlineOutlinedIcon/></NavButton>
                        <NavButton onCLickHandler={() => setActiveMenu('ManageBooking')}
                                   name={"Manage Booking"}><PersonOutlineOutlinedIcon/></NavButton>
                        <NavButton onCLickHandler={() => setActiveMenu('MyScribes')}
                                   name={"My Scribes"}><EventNoteOutlinedIcon/></NavButton>
                        <NavButton onCLickHandler={() => setActiveMenu('RaiseEvent')}
                                   name={"Raise event"}><CalendarMonthOutlinedIcon/></NavButton>
                    </ul>
                </div>
            </nav>
        </>
    )
}

const NavButton = ({onCLickHandler, name,children}: { onCLickHandler: () => void, name: string,children: React.ReactNode }) => {
    return (
        <li className="nav-item">
            <button className="nav-link button" onClick={onCLickHandler}>
                {children}
                <span
                    className={"pad-left"}>{name}</span></button>
        </li>
    )
}

export default NavigationBar