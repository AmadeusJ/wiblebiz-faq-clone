import Icon from '@/components/ui/Icon';
import InquiryStyled from './Inquiry.styled';
import InquiryItemStyled from './InquiryItem.styled';
const Inquiry = ({ title, inquiryItems = [] }) => {
  return (
    <>
      {title && <h2 className="heading-2">{title}</h2>}
      <InquiryStyled>
        {inquiryItems.map((item, index) => (
          <InquiryItem
            key={index}
            href={item?.href}
            target={item?.target}
            icon={item?.icon}
          >
            {item?.title}
            {item?.em && <em>{item?.em}</em>}
          </InquiryItem>
        ))}
      </InquiryStyled>
    </>
  );
};

const InquiryItem = ({ children, icon, ...props }) => {
  return (
    <InquiryItemStyled className="btn-xxlg btn-tertiary" {...props}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </InquiryItemStyled>
  );
};

export default Inquiry;
