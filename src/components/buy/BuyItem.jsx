import React from 'react';
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

const BuyItem = (productStore) => {
  const { productName, productPrice, count  } = productStore;
  return (
    <Row>
      <Col>
        <FormGroup inline>
          <Label>제품명</Label>
          <Input value={productName} readOnly />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>가격</Label>
          <Input value={productPrice} readOnly />
        </FormGroup>
      </Col>
      <Col>
        <Row>
          <Label>갯수</Label>
        </Row>
        <Row>
          <Input value={count} readOnly />
        </Row>
      </Col>
    </Row>
  );
};

export default BuyItem;
