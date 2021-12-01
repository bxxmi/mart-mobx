import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { observer } from "mobx-react";

const ProductItem = ({ id, name, price, count, productStore }) => {
  const selectProduct = productStore.productStore.productStore.selectProduct;

  return (
    <Row>
      <Col>
        <FormGroup inline>
          <Label>제품명</Label>
          <Input value={name} readOnly />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>가격</Label>
          <Input value={price} readOnly />
        </FormGroup>
      </Col>
      <Col>
        <Row>
          <Button onClick={() => {
            selectProduct({
              id,
              name,
              price
            });
          }}>
            담기
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default observer(ProductItem);