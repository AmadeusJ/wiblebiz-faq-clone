import Accordion from './Accordion';

const AccordionPresenter = ({ items = [], activeIndex, setActiveIndex }) => {
  return (
    <div>
      <Accordion
        defaultIndex={activeIndex}
        setActiveIndexFromParent={setActiveIndex}
      >
        {items.map((item, index) => (
          <Accordion.Item key={item.id || index}>
            <Accordion.Header
              category={item?.categoryName}
              subCategory={item?.subCategoryName}
              title={item?.question}
            />
            <Accordion.Panel content={item?.answer} />
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionPresenter;
