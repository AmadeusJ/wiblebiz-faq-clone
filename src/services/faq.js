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
export const getFaq = async ({
  limit = 10,
  offset = 0,
  tab = 'CONSULT',
  faqCategoryID,
  question,
} = {}) => {
  const response = await apiClient.get('/faq', {
    params: { limit, offset, tab, faqCategoryID, question },
  });
  console.log('🔍 서버 응답 faq:', response);
  return response.data;
};
