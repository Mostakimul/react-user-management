import { ErrorMessage, Field } from 'formik';
import {
  FormErrorText,
  Input,
  Label,
  SingleFieldConatiner,
} from '../../styles/Form.styles';

const InputField = (props) => {
  const { label, name, ...rest } = props;
  return (
    <SingleFieldConatiner>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field as={Input} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={FormErrorText} />
    </SingleFieldConatiner>
  );
};

export default InputField;
