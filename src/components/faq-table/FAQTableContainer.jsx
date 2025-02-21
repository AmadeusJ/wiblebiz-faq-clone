import FAQTablePresenter from './FAQTablePresenter';

const FAQTableContainer = () => {
  const handleSearch = () => {
    console.log('🔍 검색 실행!');
  };

  return <FAQTablePresenter onSearch={handleSearch} />;
};

export default FAQTableContainer;
