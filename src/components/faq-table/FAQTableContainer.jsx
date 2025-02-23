import { useGetFaqCategoryQuery } from '@/hooks/query/useGetFaqCategoryQuery';
import { useGetFaqQuery } from '@/hooks/query/useGetFaqQuery';
import { queryClient } from '@/services/apiClient';
import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FAQTablePresenter from './FAQTablePresenter';

const FAQTableContainer = () => {
  // 컨텍스트에서 관리할 상태를 Container에서 선언
  const [selectedCategory, setSelectedCategory] = useState('CONSULT');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [hasSearch, setHasSearch] = useState(false);
  const [faqData, setFaqData] = useState(null); // FAQ 데이터를 직접 상태로 관리

  // API Query 호출 - React Query 훅 사용
  const { data: faqCategoryData, refetch: refetchFaqCategory } =
    useGetFaqCategoryQuery(selectedCategory);
  const {
    data: faqQueryData,
    refetch: refetchFaq,
    fetchNextPage,
    hasNextPage,
  } = useGetFaqQuery({
    tab: selectedCategory,
    faqCategoryID: selectedFilter,
    question: searchValue,
  });

  useEffect(() => {
    if (faqQueryData) {
      setFaqData(faqQueryData);
    }
  }, [faqQueryData]);

  // 검색 핸들러
  const handleSearch = useCallback((value) => {
    setHasSearch(true);
    setSearchValue(value);
  }, []);

  useEffect(() => {
    if (!hasSearch) {
      setSelectedFilter('All');
      setSearchValue('');
      setActiveIndex(-1);
      // 1. 기존 FAQ 데이터 삭제
      queryClient.removeQueries({
        queryKey: ['faq'],
        exact: false,
      });

      // 2. FAQ 상태 초기화
      queryClient.setQueryData(['faq'], {
        pages: [{ pageInfo: {}, items: [] }],
        pageParams: [0],
      });
      setFaqData(null); // 직접 상태를 null로 초기화

      // 3. 새로운 요청 트리거
      refetchFaq({ cancelRefetch: true });
    }
  }, [hasSearch]);

  // 카테고리 변경 핸들러
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setSelectedFilter('All');
    setHasSearch(false);
    setSearchValue('');
    setActiveIndex(-1);
    resetFaqData();
    refetchFaqCategory();
    refetchFaq();
  }, []);

  // 필터 변경 핸들러
  const handleFilterChange = useCallback((filter) => {
    setSelectedFilter(filter);
    resetFaqData();
    setHasSearch(false);
    setSearchValue('');
    setActiveIndex(-1);
    resetFaqData();
    refetchFaq();
  }, []);

  const resetFaqData = useCallback(() => {
    queryClient.removeQueries({
      queryKey: ['faq'],
      exact: false,
    });

    queryClient.setQueryData(['faq'], {
      pages: [{ pageInfo: {}, items: [] }],
      pageParams: [0],
    });
    setFaqData(null);
  }, []);

  return (
    <>
      {/* Helmet 설정 */}
      <Helmet>
        <title>{`서비스 ${
          selectedCategory === 'CONSULT' ? '도입' : '상품'
        } FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스`}</title>
      </Helmet>

      {/* FAQTablePresenter 컴포넌트 */}
      <FAQTablePresenter
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onFilterChange={handleFilterChange}
        selectedCategory={selectedCategory}
        selectedFilter={selectedFilter}
        filters={faqCategoryData}
        faqs={faqData?.items}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        hasSearch={hasSearch}
        setHasSearch={setHasSearch}
        totalRecord={faqData?.pageInfo?.totalRecord}
      />
    </>
  );
};

export default FAQTableContainer;
