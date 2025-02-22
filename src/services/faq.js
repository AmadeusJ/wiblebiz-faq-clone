import apiClient from './apiClient';

// FAQ 카테고리 조회 API: tab 값을 인자로 받아 호출 (예: CONSULT, USAGE)
export const getFaqCategory = async (tab = 'CONSULT') => {
  const response = await apiClient.get('/faq/category', {
    params: { tab },
  });
  console.log('🔍 서버 응답 faqCategory:', response);
  return response.data;
};

// FAQ 목록 조회 API: limit, offset, tab, faqCategoryID를 인자로 받아 호출
// FAQ 목록 조회 API (불필요한 파라미터 제거)
export const getFaq = async ({
  limit = 10,
  offset = 0,
  tab = 'CONSULT',
  faqCategoryID,
  question,
} = {}) => {
  // ✅ query parameter에서 불필요한 값 제외
  const params = {
    limit,
    offset,
    tab,
    ...(faqCategoryID !== 'All' && { faqCategoryID }), // "All"이면 제외
    ...(question?.trim() && { question }), // 빈 문자열이면 제외
  };

  const response = await apiClient.get('/faq', { params });
  console.log('🔍 서버 응답 faq:', response);
  return response.data;
};
