import NavBar from "../components/NavBar";
import { Container, Row } from "react-bootstrap";
import { useAppContext } from "../context/AppContext";
import PostCard from "../components/PostCard";
import "../styles/pages/MyProfilePage.css";
import BlankProfilePic from "../assets/blank-avatar.png";
import LandingPage from "./LandingPage";

function MyProfilePage() {
    
    const { user, userPosts } = useAppContext();

    if (user === null) {
        return <LandingPage /> 
    }

    return <Container>
        <NavBar />
        <Container className="profile-banner">
            <img src={user.picture ? user.picture : BlankProfilePic} alt="profile-pic" className="profile-picture"/>
            <h1 className="mx-auto">{user.name}</h1>
        </Container>
        <Container className="mt-3">
            <Row xs={1} md={3} className="g-4">
                {userPosts && userPosts.map((post, index) => {
                    return <PostCard key={index} post={post} type='profile' />
                })}
            </Row>
        </Container>
    </Container>
}

export default MyProfilePage;