import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { observer } from "mobx-react";

const ProductItem = ({ id, name, price, productStore }) => {
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
          <Label>기능</Label>
        </Row>
        <Row>
          <Button 
            onClick={() => {
              productStore.selectProduct({
                id,
                name,
                price
              })
            }}
          >
            담기
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default observer(ProductItem);