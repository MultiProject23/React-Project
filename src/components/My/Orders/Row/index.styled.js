import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Line = styled.div`
  background-color: black;
  width: 50vw;
  height: 1px;
`;
const ProductList = styled.ul`
  display: flex;
  list-style: none;
  margin: 1vh 0;
  padding: 0px;
  width: 50vw;
  text-align: center;
`;

const OrderInfo = styled.li`
  width: 30%;
`;

const OrderSummary = styled.li`
  width: 30%;
`;

const OrderPrice = styled.li`
  width: 20%;
`;

const OrderStatus = styled.li`
  width: 20%;
`;

const ProdLink = styled(Link)`
  color: black;
`;
export { Container, Line, ProductList, OrderInfo, OrderSummary, ProdLink, OrderPrice, OrderStatus };
