import AppInfoContainer from '@/components/app-info/AppInfoContainer';
import FAQTableContainer from '@/components/faq-table/FAQTableContainer';
import InquiryContainer from '@/components/inquiry/InquiryContainer';
import ContentContainer from '@/components/layout/ContentContainer';
import ProcessContainer from '@/components/process/ProcessContainer';

const FAQ = () => {
  return (
    <ContentContainer>
      <FAQTableContainer />
      <InquiryContainer />
      <ProcessContainer />
      <AppInfoContainer />
    </ContentContainer>
  );
};

export default FAQ;
