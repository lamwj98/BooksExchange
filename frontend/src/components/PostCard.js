import { Card, Col, Button, Container } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';
import PostModal from './PostModal';
import '../styles/components/PostCard.css';

function PostCard(props) {
    const { post, type } = props;
    const { user, deletePostFn } = useAppContext();
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        try {
            await deletePostFn(user._id, post._id);
        } catch (e) {
            console.log("Error deleting post")
        }
    }

    return <Col>
        <Card>
            <Card.Body>
                <Card.Title>{post.bookName}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                {type === 'profile' &&
                <Container>
                    <Button variant="secondary post-card-button" onClick={() => setShowModal(true)}>Edit</Button>
                    <PostModal show={showModal} onHide={() => setShowModal(false)} type="update" post={post} />
                    <Button variant="secondary post-card-button" onClick={handleDelete}>Delete</Button>
                </Container>
                }
            </Card.Body>
        </Card>
    </Col>
}

export default PostCard;