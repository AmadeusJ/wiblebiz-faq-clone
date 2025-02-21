import FAQTablePresenter from './FAQTablePresenter';

export default {
  title: 'FAQ Table/FAQTable',
  component: FAQTablePresenter,
};

const Template = (args) => <FAQTablePresenter {...args} />;

// 기본 상태
export const Default = Template.bind({});
Default.args = {
  searchTerm: '',
  setSearchTerm: () => {},
  selectedCategory: 'CONSULT',
  setSelectedCategory: () => {},
  onSearch: () => console.log('🔍 검색 실행'),
};
