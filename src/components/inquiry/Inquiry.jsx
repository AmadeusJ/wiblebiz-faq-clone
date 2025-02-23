import Icon from '@/components/ui/Icon';
const Inquiry = ({ title, inquiryItems = [] }) => {
  return (
    <>
      {title && <h2 className="heading-2">{title}</h2>}
      <div className="inquiry-info">
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
      </div>
    </>
  );
};

const InquiryItem = ({ children, icon, ...props }) => {
  return (
    <a className="btn-xxlg btn-tertiary" {...props}>
      {/* {icon && <i className={`ic ${icon}`}></i>} */}
      <Icon name={icon} />
      <span>{children}</span>
    </a>
  );
};

export default Inquiry;
