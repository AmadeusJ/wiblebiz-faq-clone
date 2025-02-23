import AccordionPresenter from '@/components/ui/Accordion';
import Icon from '@/components/ui/Icon';
import InputField from '@/components/ui/InputField';
import { createContext, useContext, useState } from 'react';
// Context 생성
const FAQTableContext = createContext();

// Context 제공
export const useFAQTableContext = () => {
  const context = useContext(FAQTableContext);
  if (!context) {
    throw new Error('FAQTableContext 컴포넌트 내부에서만 사용해야 합니다.');
  }
  return context;
};

// 메인 컴포넌트
const FAQTable = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('CONSULT');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedFaq, setSelectedFaq] = useState(null);
  return (
    <FAQTableContext.Provider
      value={{
        searchValue,
        setSearchValue,
        selectedCategory,
        setSelectedCategory,
        selectedFilter,
        setSelectedFilter,
        selectedFaq,
        setSelectedFaq,
      }}
    >
      {children}
    </FAQTableContext.Provider>
  );
};

// 카테고리 탭 그룹
const FAQTableCategory = ({ children }) => {
  return <ul className="tabs">{children}</ul>;
};

// 카테고리 탭
const FAQTableCategoryTab = ({ children, value, onClick = () => {} }) => {
  const { selectedCategory, setSelectedCategory, setSelectedFilter } =
    useFAQTableContext();

  // 클릭 핸들러 수정 (상태 업데이트 확인)
  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setSelectedFilter('All');
    onClick(newCategory);
  };
  return (
    <li
      className={selectedCategory === value ? 'active' : ''}
      onClick={() => handleCategoryChange(value)}
    >
      <a>
        <span>{children}</span>
      </a>
    </li>
  );
};

// 검색 컴포넌트
const FAQTableSearch = ({ onSearch, children, setHasSearch = () => {} }) => {
  const { searchValue, setSearchValue } = useFAQTableContext();
  const handleSearch = () => {
    onSearch(searchValue);
    setHasSearch(true);
  };
  return (
    <>
      <InputField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="찾으시는 내용을 입력해 주세요"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      >
        <InputField.Button className="submit" onClick={handleSearch}>
          검색
        </InputField.Button>
        {children}
      </InputField>
    </>
  );
};

const FAQTableSearchInfo = ({ totalRecord = 0, setHasSearch = () => {} }) => {
  const { setSearchValue, setSelectedFilter } = useFAQTableContext();
  const handleReset = () => {
    setSearchValue('');
    setHasSearch(false);
    setSelectedFilter('All');
  };
  return (
    <div className="search-info">
      <h2 className="heading-info">
        검색 결과 총 <em>{totalRecord}</em>건
      </h2>
      <button type="button" className="init" onClick={handleReset}>
        <Icon name="init" />
        검색초기화
      </button>
    </div>
  );
};

// 필터 컴포넌트
const FAQTableFilter = ({ filters = [], onFilterChange = () => {} }) => {
  const { selectedFilter, setSelectedFilter } = useFAQTableContext();
  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
  };
  return (
    <div className="filter">
      <FAQTable.FilterItem
        value="All"
        label="전체"
        onClick={() => handleFilterChange('All')}
        checked={selectedFilter === 'All'}
      />
      {filters.map((filter) => (
        <FAQTable.FilterItem
          key={`filter-${filter.categoryID}`}
          value={filter.categoryID}
          label={filter.name}
          onClick={() => handleFilterChange(filter.categoryID)}
          checked={selectedFilter === filter.categoryID}
        />
      ))}
    </div>
  );
};

// 필터 아이템
const FAQTableFilterItem = ({
  value,
  label,
  checked,
  onClick = () => {},
  ...props
}) => {
  return (
    <label key={value} {...props}>
      <input type="radio" name="filter" checked={checked} onChange={onClick} />
      <i>{label}</i>
    </label>
  );
};

const FAQTableFaqList = ({ faqs = [], activeIndex, setActiveIndex }) => {
  return (
    <AccordionPresenter
      items={faqs}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  );
};

const FAQTableLoadMore = ({ fetchNextPage, hasNextPage }) => {
  return (
    <>
      {hasNextPage && (
        <button className="list-more" onClick={fetchNextPage}>
          <i></i>더보기
        </button>
      )}
    </>
  );
};

const FAQTableNoResult = () => {
  return (
    <div className="no-data">
      <Icon name="nodata" />
      <p>검색 결과가 없습니다.</p>
    </div>
  );
};

// 메인 컴포넌트에 추가
FAQTable.Category = FAQTableCategory;
FAQTable.CategoryTab = FAQTableCategoryTab;
FAQTable.Search = FAQTableSearch;
FAQTable.SearchInfo = FAQTableSearchInfo;
FAQTable.Filter = FAQTableFilter;
FAQTable.FilterItem = FAQTableFilterItem;
FAQTable.FaqList = FAQTableFaqList;
FAQTable.LoadMore = FAQTableLoadMore;
FAQTable.NoResult = FAQTableNoResult;
// DisplayName 설정
FAQTableCategory.displayName = 'FAQTable.Category';
FAQTableCategoryTab.displayName = 'FAQTable.CategoryTab';
FAQTableSearch.displayName = 'FAQTable.Search';
FAQTableSearchInfo.displayName = 'FAQTable.SearchInfo';
FAQTableFilter.displayName = 'FAQTable.Filter';
FAQTableFilterItem.displayName = 'FAQTable.FilterItem';
FAQTableFaqList.displayName = 'FAQTable.FaqList';
FAQTableLoadMore.displayName = 'FAQTable.LoadMore';
FAQTableNoResult.displayName = 'FAQTable.NoResult';
export default FAQTable;
