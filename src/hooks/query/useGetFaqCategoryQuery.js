import { getFaqCategory } from '@/services/faq';
import { useQuery } from '@tanstack/react-query';

/**
 * useGetFaqCategoryQuery
 * FAQ 카테고리 데이터를 조회하는 React Query Hook
 *
 * @param {string} tab - 카테고리 탭 (예: "CONSULT", "USAGE")
 * @returns {Object} - FAQ 카테고리 데이터와 query 상태
 */
export const useGetFaqCategoryQuery = (tab = 'CONSULT') => {
  return useQuery({
    queryKey: ['faqCategory', tab],
    queryFn: () => getFaqCategory(tab),
    // 필요한 경우 응답 데이터에서 원하는 부분을 선택
    select: (data) => {
      return data;
    },
    // placeholderData를 통해 로딩 전 기본값 제공 (빈 배열 등)
    placeholderData: [],
    // staleTime: 1000 * 60 * 3, // 3분
    // cacheTime: 1000 * 60 * 5, // 5분
  });
};
