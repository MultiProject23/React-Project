import React from "react";
import * as S from "./index.styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <S.Container>
      <S.TextContainer>
        <S.StyledLink to={"/product"}>Product</S.StyledLink>
      </S.TextContainer>
      <S.TextContainer>
        <S.StyledLink to={"/outfit"}>Outfit</S.StyledLink>
      </S.TextContainer>
      <S.TextContainer>
        <S.StyledLink to={"/review"}>Review</S.StyledLink>
      </S.TextContainer>
    </S.Container>
  );
}
export default Nav;
