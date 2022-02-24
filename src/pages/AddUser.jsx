import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import FormikControl from '../components/form/FormikControl';
import AppLayout from '../components/layout/AppLayout';
import { addUser } from '../features/user/userSlice';
import { FormFieldContainer } from '../styles/Form.styles';

const AddUser = () => {
  // initial values
  const initialValues = {
    name: '',
    username: '',
    email: '',
    city: '',
  };
  // validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email format!')
      .required('Please enter your email!'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // submit function
  onsubmit = (values) => {
    const userData = {
      id: Math.floor(Math.random() * (1000 - 11)) + 11,
      name: values.name,
      username: values.username,
      email: values.email,
      address: {
        city: values.city,
      },
    };

    dispatch(addUser(userData));
    navigate('/');
    toast.success('User created successfully!');
  };
  return (
    <AppLayout title="Create new user">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
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

export default AddUser;
