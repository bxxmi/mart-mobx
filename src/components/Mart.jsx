import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import ProductList from './product/ProductList';
import BuyList from './buy/BuyList';
import { observer } from "mobx-react";

const Mart = ({ productStore }) => {
  return (
    <Container style={{ paddingTop: "30px" }}>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>상품목록</h3>
            </CardHeader>
            <CardBody>
              <ProductList productStore={productStore}/>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardHeader>
              <h3>장바구니</h3>
            </CardHeader>
            <CardBody>
              <BuyList />
            </CardBody>
            <CardFooter>합계 : {productStore.totalPrice}</CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Mart);