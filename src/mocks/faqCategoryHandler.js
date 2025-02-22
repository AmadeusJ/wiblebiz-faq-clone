import { http, HttpResponse } from 'msw';

export const faqCategoryHandler = http.get(
  '/api/faq/category',
  async ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get('tab');

    if (tab === 'CONSULT') {
      return HttpResponse.json(
        [
          { categoryID: 'PRODUCT', name: '서비스 상품' },
          { categoryID: 'COUNSELING', name: '도입 상담' },
          { categoryID: 'CONTRACT', name: '계약' },
        ],
        { status: 200 }
      );
    } else if (tab === 'USAGE') {
      return HttpResponse.json(
        [
          { categoryID: 'SIGN_UP', name: '가입문의' },
          { categoryID: 'BUSINESS', name: '비즈니스(업무용)' },
          { categoryID: 'ACCIDENT', name: '사고/보험' },
          { categoryID: 'RESERVATION', name: '예약/결제' },
          { categoryID: 'VEHICLE', name: '차량문의' },
          { categoryID: 'REFUEL', name: '충전' },
          { categoryID: 'COUPON', name: '쿠폰/기타' },
        ],
        { status: 200 }
      );
    } else {
      return HttpResponse.json(
        { message: 'Invalid tab parameter' },
        { status: 400 }
      );
    }
  }
);
