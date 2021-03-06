import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUser } from '../../features/user/userSlice';

const SingleUser = ({ user, index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    setShow(false);
    toast.error('Deleted Successfully!');
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{user?.name}</td>
        <td>{user?.username ? user?.username : '-'}</td>
        <td>{user?.address?.city ? user?.address?.city : '-'}</td>
        <td>{user.email}</td>
        <td>
          <Button
            as={Link}
            to={`/edit-user/${user.id}`}
            variant="warning"
            size="sm"
          >
            Edit
          </Button>
        </td>
        <td>
          <Button onClick={handleShow} variant="danger" size="sm">
            Delete
          </Button>
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete the user!</Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleUser;
