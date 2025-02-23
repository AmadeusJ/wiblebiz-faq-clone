import { getFaq } from '@/services/faq';
import { useInfiniteQuery } from '@tanstack/react-query';

/**
 * useGetFaqQuery
 * FAQ 목록 데이터를 조회하는 React Query Hook (무한 스크롤 지원)
 *
 * @param {Object} params - FAQ 조회에 필요한 파라미터
 * @param {number} params.limit - 한 페이지 당 항목 수 (기본 10)
 * @param {string} params.tab - FAQ 탭 ("CONSULT" 또는 "USAGE", 기본 "CONSULT")
 * @param {string} [params.faqCategoryID] - 선택적 FAQ 카테고리 ID
 * @param {string} [params.question] - 선택적 검색 질문
 * @returns {Object} - FAQ 목록 데이터와 query 상태
 */
export const useGetFaqQuery = ({
  limit = 10,
  tab = 'CONSULT',
  faqCategoryID,
  question,
} = {}) => {
  return useInfiniteQuery({
    queryKey: ['faq', { limit, tab, faqCategoryID, question }],
    queryFn: ({ pageParam = 0 }) =>
      getFaq({ limit, offset: pageParam, tab, faqCategoryID, question }),
    getNextPageParam: (lastPage) => {
      const { nextOffset, totalRecord, limit, offset } = lastPage.pageInfo;

      // 다음 데이터가 존재하는 경우에만 nextOffset 반환
      return offset + limit < totalRecord ? nextOffset : undefined;
    },
    select: (data) => {
      return {
        pageInfo: data.pages[data.pages.length - 1]?.pageInfo || {},
        items: data.pages.flatMap((page) => page.items), // 여러 페이지의 데이터를 합쳐서 반환
      };
    },
    placeholderData: {
      pageInfo: {
        totalRecord: 0,
        offset: 0,
        limit,
        prevOffset: 0,
        nextOffset: 0,
      },
      items: [],
    },
  });
};
