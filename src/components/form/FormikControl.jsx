import InputField from './InputField';

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <InputField {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
