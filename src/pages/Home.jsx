import { useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/layout/AppLayout';
import { fetchUsers } from '../features/user/userSlice';
import { H2 } from '../styles/Element.styled';

const Home = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, isError, message } = useSelector(
    (state) => state.users,
  );

  // fetcing user if is not available
  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
    return <H2>{message}</H2>;
  }

  return (
    <AppLayout title="All Users">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => {
            return (
              <tr key={user.id}>
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
          })}
        </tbody>
      </Table>
    </AppLayout>
  );
};

export default Home;
