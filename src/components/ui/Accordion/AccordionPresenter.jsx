import Accordion from './Accordion';

const AccordionPresenter = ({ items = [], defaultActiveIndex = -1 }) => {
  return (
    <div>
      <Accordion defaultIndex={defaultActiveIndex}>
        {items.map((item, index) => (
          <Accordion.Header key={index}>
            <Accordion.Panel>{item}</Accordion.Panel>
          </Accordion.Header>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionPresenter;
