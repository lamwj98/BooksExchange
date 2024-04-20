import { useAppContext } from "../context/AppContext";
import { Button, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import PostModal from "../components/PostModal";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";

function HomePage () {
    const { posts } = useAppContext();
    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <NavBar />
            <Container fluid className="mt-3">
                <Button variant="outline-primary mb-3" onClick={() => setShowModal(true)}>Post an Item</Button>
                <PostModal show={showModal} onHide={() => setShowModal(false)} />
                <Row xs={1} md={3} className="g-4">
                    {posts && posts.map(post => {
                        return <PostCard key={post._id} post={post} description={post} />
                    })}
                </Row>
            </Container>
        </Container>
    )
}

export default HomePage;
