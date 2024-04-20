// import { useState } from 'react';
import { Modal, Button, Form, Toast } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

function PostModal(props) {
    const [bookName, setBookName] = useState(props.post ? props.post.bookName : '');
    const [description, setDescription] = useState(props.post ? props.post.description : '');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('Item successfully posted');
    const { user, createPostFn, updatePostFn } = useAppContext();

    const handleBookNameChange = (e) => {
        setBookName(e.target.value);
    };
    
    // Handler function to update description state when the textarea changes
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            await createPostFn({
                bookName: bookName, 
                description: description, 
                owner: user._id
            }).then(() => {
                setShowToast(true);
                setBookName('');
                setDescription('');
                props.onHide();
            });

            setToastMessage('Item successfully posted');
        } catch (e) {
            setToastMessage('Error posting item');
            setShowToast(true);
        }
    }

    const handleUpdate = async () => {
        try {
            await updatePostFn(user._id, {
                ...props.post,
                bookName: bookName,
                description: description
            }).then(() => {
                setShowToast(true);
                props.onHide();
            });

            setToastMessage('Item successfully updated');
        } catch (e) {
            setToastMessage('Error updating item');
            setShowToast(true);
        }
    }

    if (showToast) {
        return <Toast show={showToast} onClose={() => setShowToast(false)}>
            <Toast.Header>
            <strong className="mr-auto">Post Item</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
    }

    return <Modal show={props.show} onHide={() => props.onHide()}>
        <Modal.Header closeButton>
        <Modal.Title>{props.post ? "Update an Item" : "Post an Item"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="bookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
                type="text"
                value={bookName}
                onChange={handleBookNameChange}
            />
            </Form.Group>
            <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={handleDescriptionChange}
            />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => props.onHide()}>
            Close
        </Button>
        <Button variant="primary" onClick={props.type ==='update' ? () => handleUpdate() : () => handleSubmit()}>
            {props.type === 'update' ? 'Update' : 'Post'}
        </Button>
        </Modal.Footer>
    </Modal>
}

export default PostModal;