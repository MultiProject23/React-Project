// import React, {useState} from "react";
// import * as S from "./index.styled";
// import ReviewListTitle from "./ReviewTitle";
// import ReviewListItem from "./ReviewContent";
// import ReviewSearch from "./ReviewSearch";
// import ReviewModal from "./ReviewModal";
// import BoardPage from "./ReviewPagenation";
// import reviewData from "../../assets/Review/reviewData.json";

// function ReviewList(props) {
//   const [modal, setModal] = useState(false);
//   const [modalContent, setModalContent] = useState (null); //json 데이터 가져오기 위한 useState

//   const contentsPerPage = 12; // 페이지당 보여줄 컨텐츠 개수
//   const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

//   const indexOfLastContent = currentPage * contentsPerPage;
//   const indexOfFirstContent = indexOfLastContent - contentsPerPage;
//   const currentContents = /*lists*/reviewData.reviews.slice(indexOfFirstContent, indexOfLastContent);

//   const openModal = (content) => {
//     setModalContent(content);
//     setModal(true);
//   };

//   const reviewItems = currentContents.map((content) => (
//     <ReviewListItem
//       key={content.id}
//       image={content.image}
//       product={content.product}
//       content={content.content}
//       account={content.account}
//       getModal={() => setModal(true)} //모달 open
//       openModal={() => openModal(content)}
//        //content 데이터 가져옴. 
//     />
//   ));
  
//   return (
//     <S.Container>
//         <S.Review_list>
//             <ReviewListTitle/>
//             <ReviewSearch/>
//             {modal && <ReviewModal CloseModal={()=> setModal(false)} data={modalContent}/>}
//             {reviewItems}
//             <BoardPage totalContents={reviewData.reviews.length} contentsPerPage={contentsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         </S.Review_list>    
//     </S.Container>
//   );
// }

// export default ReviewList;
import React, {useState} from "react";
import * as S from "./index.styled";
import ReviewListTitle from "./ReviewTitle";
import ReviewListItem from "./ReviewContent";
import ReviewSearch from "./ReviewSearch";
import ReviewModal from "./ReviewModal";
import BoardPage from "./ReviewPagenation";
import reviewData from "../../assets/Review/reviewData.json";

function ReviewList(props) {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); //json 데이터 가져오기 위한 useState

  const contentsPerPage = 12; // 페이지당 보여줄 컨텐츠 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents = /*lists*/reviewData.reviews.slice(indexOfFirstContent, indexOfLastContent);

  const openModal = (content) => {
    setModalContent(content);
    setModal(true);
  };

  const reviewItems = currentContents.map((content) => (
    <ReviewListItem
      key={content.id}
      image={content.image}
      product={content.product}
      content={content.content}
      account={content.account}
      openModal={() => openModal(content)} // 모달 열기
    />
  ));
  
  return (
    <S.Container>
      <S.Review_list>
        <ReviewListTitle/>
        <ReviewSearch/>
        {modal && modalContent && <ReviewModal CloseModal={()=> setModal(false)} data={modalContent}/>}
        {reviewItems}
        <BoardPage totalContents={reviewData.reviews.length} contentsPerPage={contentsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </S.Review_list>    
    </S.Container>
  );
}

export default ReviewList;
