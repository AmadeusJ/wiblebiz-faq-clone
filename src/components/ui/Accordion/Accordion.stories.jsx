import AccordionPresenter from './AccordionPresenter';

export default {
  title: 'UI/Accordion',
  component: AccordionPresenter,
};

const Template = (args) => <AccordionPresenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    '위블 비즈에서는 어떤 상품을 이용할 수 있나요?',
    '위블 비즈 이용 요금은 어떻게 책정되나요?',
    '위블 비즈 회원 가입은 어떻게 하나요?',
  ],
};
