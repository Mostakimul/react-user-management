import { Button } from 'react-bootstrap';

const SingleUser = ({ user }) => {
  return (
    <tr>
      <td>{user?.id}</td>
      <td>{user?.name}</td>
      <td>{user?.username}</td>
      <td>{user?.address?.city}</td>
      <td>{user.email}</td>
      <td>
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SingleUser;
