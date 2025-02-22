// faqHandler.js
import { http, HttpResponse } from 'msw';
import { faqData } from './staticResponseData';

export const faqHandler = http.get('/api/faq', async ({ request }) => {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '10', 10);
  const offset = parseInt(url.searchParams.get('offset') || '0', 10);
  const tab = url.searchParams.get('tab');
  const faqCategoryID = url.searchParams.get('faqCategoryID');
  const question = url.searchParams.get('question'); // 🔍 검색어 추가

  let faqs = faqData[tab]?.items || [];

  // FAQ 카테고리 필터링
  if (faqCategoryID) {
    const categoryMapping = {
      CONSULT: {
        PRODUCT: '서비스 상품',
        COUNSELING: '도입 상담',
        CONTRACT: '계약',
      },
      USAGE: {
        SIGN_UP: '가입문의',
        BUSINESS: '비즈니스(업무용)',
        ACCIDENT: '사고/보험',
        RESERVATION: '예약/결제',
        VEHICLE: '차량문의',
        REFUEL: '충전',
        COUPON: '쿠폰/기타',
      },
    };

    const filterValue = categoryMapping[tab]?.[faqCategoryID];
    if (filterValue) {
      if (tab === 'CONSULT') {
        faqs = faqs.filter((faq) => faq.subCategoryName === filterValue);
      } else {
        faqs = faqs.filter((faq) => faq.categoryName === filterValue);
      }
    }
  }

  // 🔍 검색어 필터링 (question이 포함된 FAQ만 반환)
  if (question) {
    const lowerQuestion = question.toLowerCase();
    faqs = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(lowerQuestion)
    );
  }

  const totalRecord = faqs.length;
  console.log('current faqs: ', faqs, faqs.length);
  const pagedItems = faqs.slice(offset, offset + limit);
  console.log('pagedItems: ', pagedItems, pagedItems.length);
  const prevOffset = offset - limit < 0 ? 0 : offset - limit;
  const nextOffset = offset + limit < totalRecord ? offset + limit : 0;

  const pageInfo = {
    totalRecord,
    offset,
    limit,
    prevOffset,
    nextOffset,
  };

  return HttpResponse.json({ pageInfo, items: pagedItems }, { status: 200 });
});
