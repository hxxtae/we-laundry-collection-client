import { Container, Row, Col } from 'react-grid-system';

interface IContainers {
  xs?: number;
  md?: number;
  xl?: number;
  children: JSX.Element;
}

function Containers({ xs = 12, md = 12, xl = 12, children }: IContainers) {
  return (
    <Container>
      <Row>
        <Col xs={xs} md={md} xl={xl}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default Containers;
