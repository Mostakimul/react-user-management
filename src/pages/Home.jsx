import { useEffect, useState } from 'react';
import { Button, Col, Row, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/layout/AppLayout';
import SingleUser from '../components/singleUser/SingleUser';
import { fetchUsers } from '../features/user/userSlice';
import { H2, H3 } from '../styles/Element.styled';

const Home = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, isError, message } = useSelector(
    (state) => state.users,
  );

  const [userData, setUserData] = useState([]);

  // fetcing user if is not available
  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(fetchUsers());
    }
    setUserData(allUsers);
  }, [allUsers]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // A-Z sorting
  const sortAZ = (fieldType) => {
    const azSort = [...userData].sort((a, b) => {
      return a[fieldType].toLowerCase() > b[fieldType].toLowerCase() ? 1 : -1;
    });
    setUserData(azSort);
  };
  // Z-A sorting
  const sortZA = (fieldType) => {
    const azSort = [...userData].sort((a, b) => {
      return a[fieldType].toLowerCase() < b[fieldType].toLowerCase() ? 1 : -1;
    });
    setUserData(azSort);
  };

  if (isError) {
    return <H2>{message}</H2>;
  }

  return (
    <AppLayout title="All Users" showAdd>
      <Row>
        <Col className="mb-2">
          <H3>Sort by username: </H3>
          <Button
            onClick={() => sortAZ('username')}
            className="me-2"
            variant="secondary"
            size="sm"
          >
            A-Z
          </Button>
          <Button
            onClick={() => sortZA('username')}
            variant="secondary"
            size="sm"
          >
            Z-A
          </Button>
        </Col>
      </Row>
      {allUsers.length <= 0 ? (
        <div className="alert alert-primary" role="alert">
          There is no user!!!
        </div>
      ) : (
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
            {userData.map((user, index) => (
              <SingleUser key={user.id} user={user} index={index} />
            ))}
          </tbody>
        </Table>
      )}
    </AppLayout>
  );
};

export default Home;
