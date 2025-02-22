const Icon = ({ name, ...props }) => {
  return (
    <img src={`/icons/ic_${name}.svg`} className={`ic-${name}`} {...props} />
  );
};

export default Icon;
