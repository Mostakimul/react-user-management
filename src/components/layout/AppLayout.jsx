import { Col, Container, Row } from 'react-bootstrap';
import Header from '../common/Header';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppLayout;
