import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/layout/AppLayout';
import { fetchUsers } from '../features/user/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users,
  );

  // fetcing user if is not available
  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);

  return (
    <AppLayout>
      <h2>Home</h2>
    </AppLayout>
  );
};

export default Home;
