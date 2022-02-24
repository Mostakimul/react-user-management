import { useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/layout/AppLayout';
import SingleUser from '../components/singleUser/SingleUser';
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
          {allUsers.map((user) => (
            <SingleUser key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
    </AppLayout>
  );
};

export default Home;
