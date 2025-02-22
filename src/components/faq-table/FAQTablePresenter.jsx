import FAQTable from './FAQTable';

const FAQTablePresenter = ({
  onSearch,
  onCategoryChange,
  onFilterChange,
  filters,
  faqs,
  fetchNextPage,
  hasNextPage,
  activeIndex,
  setActiveIndex,
  totalRecord,
  hasSearch,
  setHasSearch,
}) => {
  return (
    <FAQTable>
      {/* 카테고리 탭 그룹 */}
      <FAQTable.Category>
        <FAQTable.CategoryTab
          value="CONSULT"
          onClick={() => onCategoryChange('CONSULT')}
        >
          서비스 도입
        </FAQTable.CategoryTab>
        <FAQTable.CategoryTab
          value="USAGE"
          onClick={() => onCategoryChange('USAGE')}
        >
          서비스 사용
        </FAQTable.CategoryTab>
      </FAQTable.Category>
      {/* 검색 영역 */}
      <FAQTable.Search onSearch={onSearch} setHasSearch={setHasSearch} />
      {hasSearch && (
        <FAQTable.SearchInfo
          totalRecord={totalRecord}
          setHasSearch={setHasSearch}
        />
      )}
      {/* 필터 영역 */}
      <FAQTable.Filter filters={filters} onFilterChange={onFilterChange} />
      {/* 질문 목록 영역 */}
      <FAQTable.FaqList
        faqs={faqs}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {/* 더보기 버튼 */}
      <FAQTable.LoadMore
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </FAQTable>
  );
};

export default FAQTablePresenter;
