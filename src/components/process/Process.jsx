const Process = ({ title, processItems = [] }) => {
  return (
    <>
      {title && <h2 className="heading-2">{title}</h2>}
      <ol className="process-info">
        {processItems.map((item, index) => (
          <ProcessItem
            className={`process-${index + 1}`}
            key={item.id}
            item={item}
          />
        ))}
      </ol>
    </>
  );
};

const ProcessItem = ({ item, ...props }) => {
  return (
    <li {...props}>
      <span>
        <strong>{item.title}</strong>
        <em>{item.description}</em>
      </span>
    </li>
  );
};

export default Process;
