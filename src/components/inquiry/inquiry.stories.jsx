import InquiryPresenter from './InquiryPresenter';

export default {
  title: 'Inquiry',
  component: InquiryPresenter,
};

const Template = (args) => <InquiryPresenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '서비스 문의',
  inquiryItems: [
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
  ],
};
