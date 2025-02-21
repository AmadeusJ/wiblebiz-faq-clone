import FAQTable from './FAQTable';

const FAQTablePresenter = ({ onSearch }) => {
  return (
    <FAQTable>
      {/* 카테고리 탭 그룹 */}
      <FAQTable.Category>
        <FAQTable.CategoryTab value="CONSULT">서비스 도입</FAQTable.CategoryTab>
        <FAQTable.CategoryTab value="USAGE">서비스 사용</FAQTable.CategoryTab>
      </FAQTable.Category>
      {/* 검색 영역 */}
      <FAQTable.Search onSearch={onSearch} />
      {/* 필터 영역 */}
      <FAQTable.Filter>
        <FAQTable.FilterItem value="CONSULT">전체</FAQTable.FilterItem>
        <FAQTable.FilterItem value="USAGE">서비스 상품</FAQTable.FilterItem>
      </FAQTable.Filter>
      {/* 질문 목록 영역 */}
      <FAQTable.FaqList>
        <FAQTable.FaqItem />
      </FAQTable.FaqList>
    </FAQTable>
  );
};

export default FAQTablePresenter;
