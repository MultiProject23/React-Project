import styled from "@emotion/styled";

const Review_Modal = styled.div`
position: fixed;
z-index : 1000;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: center;
align-items: center;
`

const Review_Modal_Body = styled.div`
  position: absolute;
  width: 900px ;
  height: 550px ;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}
`
const flexContainer = styled.div`
  background-color: #8CAC6A;
  border : 1px solid #d3d3d3;
  display: flex;
  justify-content: left;
  align-items : center;
  width: 100%;
  height :100%;
  margin : 0px;
  flex :1;
`

const Review_Modal_Body_section1 = styled.div`
  background-color : #f8f8f8;  
  display: flex;
  justify-content: center;
  align-items : center;
  width : 50%;
  height : 100%;  
  user-select: none;
  // border : 1px solid red;
  
}
`
const Review_Modal_Body_section2 = styled.div`
  background-color : #f8f8f8;  
  display: flex;
  justify-content: top;
  align-items : center;
  width : 50%;
  height : 100%;  
  flex-direction: column;
  // border : 1px solid blue;
  }
`

const Review_Modal_CloseBtn = styled.button`
position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 17px;
  cursor:pointer;
`


const Review_Modal_ImagePrd = styled.img`
display: flex;
justify-content: center;
align-items : center;
width : 400px;
// height : 100px;
aspect-ratio: 1/1; 
cursor:pointer; 
`

const Review_Modal_InfoStarSection = styled.div`
background-color : #f8f8f8;  
display: flex;
justify-content: center;
align-items : center;
width : 90%;
height : 15%;  
border- bottom : 1px solid #d3d3d3;
`

const Review_Modal_InfoStar_StarIDContaner = styled.div`
display: flex;
align-items : center;
width : 100%;
height : 80%;
// border : 1px solid Green;
flex-direction: column;
`
const Review_Modal_InfoStar_Star = styled.div`
display: flex;
justify-content: left;
align-items : center;
width : 100%;
height : 50%;
// border : 1px solid Blue;
`
const Review_Modal_InfoStar_userID = styled.div`
display: flex;
justify-content: left;
align-items : top;
width : 100%;
height : 50%;
// border : 1px solid black;
color : 8CAC6A;
font-size : 13px;
`
const Review_Modal_ContentSection =styled.div`
background-color : #f8f8f8;  
display: flex;
justify-content: top;
align-items : center;
width : 90%;
height : 85%;  
// border : 2px solid Red;
flex-direction: column;
`

const Review_Modal_Content = styled.div`
  display: flex;
  text-align: left;
  align-items : top;
  margin-top : 20px;
  width : 100%;
  height : 80%;  
`
const Review_Modal_BuyItemBox = styled.div`
  background-color : #f8f8f8;  
  display: flex;
  justify-content: center;
  align-items : center;
  width : 100%;
  height : 50%;
`

const Review_Modal_BuyItemImage = styled.img`
  background-color : #f8f8f8;  
  display: flex;
  justify-content: center;
  align-items : center;
  width : 80px;
  aspect-ratio: 1/1;
  border : 1px solid #d3d3d3;
  border-right : none;
  cursor:pointer
`
const Review_Modal_BuyItemName = styled.div`
  background-color : #f8f8f8;  
  display: flex;
  justify-content: left;
  align-items : center;
  width : 80%;
  height : 80px;
  border : 1px solid #d3d3d3;
  color : #807675;
  cursor:pointer
  
`

  export {Review_Modal,Review_Modal_Body,Review_Modal_CloseBtn,
    flexContainer,
    Review_Modal_Body_section1,
    Review_Modal_ImagePrd,
    Review_Modal_Body_section2,
    Review_Modal_InfoStarSection,
    Review_Modal_InfoStar_StarIDContaner,
    Review_Modal_InfoStar_Star,Review_Modal_InfoStar_userID,
    Review_Modal_ContentSection,
    Review_Modal_Content,
    Review_Modal_BuyItemBox,
    Review_Modal_BuyItemImage, Review_Modal_BuyItemName
  }