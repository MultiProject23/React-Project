import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Profile from "../../components/My/Profile";
import Orders from "../../components/My/Orders";
import Address from "../../components/My/Address";

import * as S from "./index.styled";
import Json from "../../data/MyPage/data.json";

import { API_PATH } from "../../constants/path";

function My() {
  const [data, setData] = useState({});
  const [option, setOption] = useState(0);

  const getData = useCallback(async () => {
    await axios
      .get(API_PATH.MY.BASE)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(data);

  const changeOption = (number) => {
    setOption(number);
  };

  // TODO: 추후 Json -> data 로 변경
  return (
    <S.Container>
      {option === 0 && (
        <S.Section>
          <S.NavWrapper>
            <S.SelectHeader>회원정보</S.SelectHeader>
            <S.Header onClick={() => changeOption(1)}>주소정보</S.Header>
            <S.Header onClick={() => changeOption(2)}>주문/배송</S.Header>
          </S.NavWrapper>
          <Profile name={Json.name} email={Json.email} phoneNumber={Json.phone_number} />
        </S.Section>
      )}
      {option === 1 && (
        <S.Section>
          <S.NavWrapper>
            <S.Header onClick={() => changeOption(0)}>회원정보</S.Header>
            <S.SelectHeader>주소정보</S.SelectHeader>
            <S.Header onClick={() => changeOption(2)}>주문/배송</S.Header>
          </S.NavWrapper>
          <Address zipCode={Json.zip_code} address={Json.address} recipient={Json.recipient} />
        </S.Section>
      )}
      {option === 2 && (
        <S.Section>
          <S.NavWrapper>
            <S.Header onClick={() => changeOption(0)}>회원정보</S.Header>
            <S.Header onClick={() => changeOption(1)}>주소정보</S.Header>
            <S.SelectHeader>주문/배송</S.SelectHeader>
          </S.NavWrapper>
          <Orders count={Json.count} orders={Json.orders} />
        </S.Section>
      )}
    </S.Container>
  );
}

export default My;
