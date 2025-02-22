import Icon from '@/components/ui/Icon';

const AppInfo = ({ items = [] }) => {
  return (
    <div className="app-info">
      <AppInfoTitle />
      {items.map((item, index) => (
        <AppInfoItem
          key={index}
          item={item}
          className={item?.platform}
          href={item?.href}
        />
      ))}
    </div>
  );
};

const AppInfoTitle = () => {
  return (
    <h2>
      <em>위블 비즈 App</em>
      &nbsp;지금 만나보세요!
    </h2>
  );
};

const AppInfoItem = ({ item, ...props }) => {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      <Icon name={item.icon} />
      {item.title}
    </a>
  );
};
export default AppInfo;
