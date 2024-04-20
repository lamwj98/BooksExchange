import { useAppContext } from "../context/AppContext";
import { GoogleLogin } from "@react-oauth/google";
import HomePage from "./HomePage";
import { Container } from "react-bootstrap";
import "../styles/pages/LandingPage.css";

function LandingPage() {
    const { user, loginUser } = useAppContext();

    return (
        <Container>
            {user ? <HomePage /> : 
            <Container className="landing-page-inner-container">
                <h1>
                    Welcome to BooksExchange!
                </h1>
                <p>
                    Login/Sign up via Google
                </p>
                <GoogleLogin onSuccess={loginUser} />
            </Container>
            }
        </Container>
    )
}

export default LandingPage;