import AppInfoContainer from '@/components/app-info/AppInfoContainer';
import FAQTableContainer from '@/components/faq-table/FAQTableContainer';
import InquiryContainer from '@/components/inquiry/InquiryContainer';
import ContentContainer from '@/components/layout/ContentContainer';
import ProcessContainer from '@/components/process/ProcessContainer';

const FAQ = () => {
  return (
    <ContentContainer>
      <h1>
        자주 묻는 질문
        <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>
      <FAQTableContainer />
      <InquiryContainer />
      <ProcessContainer />
      <AppInfoContainer />
    </ContentContainer>
  );
};

export default FAQ;
