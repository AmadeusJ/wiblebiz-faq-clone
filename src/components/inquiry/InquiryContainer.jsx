import InquiryPresenter from './InquiryPresenter';

const InquiryContainer = () => {
  const title = '서비스 문의';
  const inquiryItems = [
    {
      title: '상품제안서 다운로드',
      href: '#',
      target: '_blank',
      icon: 'download',
    },
    {
      title: '상품문의 등록하기',
      href: '#',
      target: '_blank',
      icon: 'write',
    },
    {
      title: '카톡으로 문의하기',
      href: '#',
      target: '_blank',
      icon: 'talk',
    },
  ];
  return <InquiryPresenter title={title} inquiryItems={inquiryItems} />;
};

export default InquiryContainer;
