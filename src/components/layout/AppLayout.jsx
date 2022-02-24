import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { P } from '../../styles/Element.styled';
import Header from '../common/Header';

const AppLayout = ({ children, title, showAdd }) => {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <P className="fs-4 fw-bold">{title}</P>
                {showAdd && (
                  <Button as={Link} to="/add-user" variant="primary" size="sm">
                    Add New
                  </Button>
                )}
              </Card.Header>
              <Card.Body>{children}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppLayout;
