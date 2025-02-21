import InquiryPresenter from './InquiryPresenter';

const InquiryContainer = () => {
  const title = '문의하기';
  const inquiryItems = [
    {
      title: '상품제안서 다운로드',
      href: '#',
      target: '_blank',
      icon: 'ic-download',
    },
    {
      title: '상품문의 등록하기',
      href: '#',
      target: '_blank',
      icon: 'ic-question',
    },
    {
      title: '카톡으로 문의하기',
      href: '#',
      target: '_blank',
      icon: 'ic-kakao',
    },
  ];
  return <InquiryPresenter title={title} inquiryItems={inquiryItems} />;
};

export default InquiryContainer;
