import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import FormikControl from '../components/form/FormikControl';
import AppLayout from '../components/layout/AppLayout';
import { updateUser } from '../features/user/userSlice';
import { FormFieldContainer } from '../styles/Form.styles';

const EditUser = () => {
  const { id } = useParams();
  const { allUsers } = useSelector((state) => state.users);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const foundUser = allUsers.find((user) => user.id === parseInt(id));
    setUser(foundUser);
  }, [id, allUsers]);

  // initial values
  const initialValues = {
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    city: user?.address?.city || '',
  };
  // validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email format!')
      .required('Please enter your email!'),
  });

  // submit function
  onsubmit = (values) => {
    const userData = {
      id: parseInt(id),
      name: values.name,
      username: values.username,
      email: values.email,
      city: values.city,
    };

    dispatch(updateUser(userData));
    navigate('/');
    toast.success('User updated successfully!');
  };

  return (
    <AppLayout title="Edit user">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <FormFieldContainer>
              <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
                placeholder="Enter your name"
              />
              <FormikControl
                control="input"
                type="text"
                label="Username"
                name="username"
                placeholder="Enter your username"
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <FormikControl
                control="input"
                type="text"
                label="City"
                name="city"
                placeholder="Enter your city"
              />
              <Button className="me-1" as={Link} to="/" variant="secondary">
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={!formik.isValid}
              >
                Submit
              </Button>
            </FormFieldContainer>
          </Form>
        )}
      </Formik>
    </AppLayout>
  );
};

export default EditUser;
