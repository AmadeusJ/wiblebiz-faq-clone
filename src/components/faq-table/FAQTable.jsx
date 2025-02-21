import AccordionPresenter from '@/components/ui/Accordion';
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
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedFaq, setSelectedFaq] = useState(null);
  return (
    <FAQTableContext.Provider
      value={{
        searchValue,
        setSearchValue,
        selectedCategory,
        setSelectedCategory,
        selectedFilters,
        setSelectedFilters,
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
const FAQTableCategoryTab = ({ children, value }) => {
  const { selectedCategory, setSelectedCategory } = useFAQTableContext();

  // 클릭 핸들러 수정 (상태 업데이트 확인)
  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
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
const FAQTableSearch = ({ onSearch, children }) => {
  const { searchValue, setSearchValue } = useFAQTableContext();
  return (
    <InputField
      value={searchValue}
      onChange={setSearchValue}
      placeholder="찾으시는 내용을 입력해 주세요"
    >
      <InputField.Button className="submit" onClick={onSearch}>
        검색
      </InputField.Button>
      {children}
    </InputField>
  );
};

// 필터 컴포넌트
const FAQTableFilter = ({ filters = [] }) => {
  filters = [
    { id: 1, label: '전체', value: 'All' },
    { id: 2, label: '서비스 사용', value: 'Product' },
  ];
  return (
    <div className="filter">
      {filters.map((filter) => (
        <FAQTable.FilterItem
          key={filter.id}
          value={filter.id}
          label={filter.label}
        />
      ))}
    </div>
  );
};

// 필터 아이템
const FAQTableFilterItem = ({ value, label, ...props }) => {
  const { selectedFilters, setSelectedFilters } = useFAQTableContext();
  return (
    <label key={value} {...props}>
      <input
        type="radio"
        name="filter"
        checked={selectedFilters.includes(value)}
        onChange={() => setSelectedFilters([...selectedFilters, value])}
      />
      <i>{label}</i>
    </label>
  );
};

const FAQTableFaqList = ({ items = [] }) => {
  items = [
    '위블 비즈에서는 어떤 상품을 이용할 수 있나요?',
    '위블 비즈 이용 요금은 어떻게 책정되나요?',
    '위블 비즈 회원 가입은 어떻게 하나요?',
  ];
  return <AccordionPresenter items={items} />;
};

// 메인 컴포넌트에 추가
FAQTable.Category = FAQTableCategory;
FAQTable.CategoryTab = FAQTableCategoryTab;
FAQTable.Search = FAQTableSearch;
FAQTable.Filter = FAQTableFilter;
FAQTable.FilterItem = FAQTableFilterItem;
FAQTable.FaqList = FAQTableFaqList;

// DisplayName 설정
FAQTableCategory.displayName = 'FAQTable.Category';
FAQTableCategoryTab.displayName = 'FAQTable.CategoryTab';
FAQTableSearch.displayName = 'FAQTable.Search';
FAQTableFilter.displayName = 'FAQTable.Filter';
FAQTableFilterItem.displayName = 'FAQTable.FilterItem';
FAQTableFaqList.displayName = 'FAQTable.FaqList';

export default FAQTable;
