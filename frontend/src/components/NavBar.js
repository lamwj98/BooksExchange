import { useAppContext } from "../context/AppContext";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/components/NavBar.css';

function NavBar() {
    const { user, logoutUser } = useAppContext();
    const navigate = useNavigate();

    const onClickPage = (link) => {
        navigate(link);
    }

    if (!user) {
        navigate('/');
    }

    return <div className="navBar">
        <Button variant="outline-dark" onClick={() => onClickPage('/')}>Home</Button>
        <Button variant="outline-dark"onClick={() => onClickPage('/profile')}>My Profile</Button>
        {user ? <Button variant="primary" onClick={logoutUser}>Logout</Button> : null}
    </div>
}

export default NavBar;