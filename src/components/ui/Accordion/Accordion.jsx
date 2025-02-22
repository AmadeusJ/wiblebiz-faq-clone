import { AnimatePresence, motion } from 'framer-motion';
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionContext 컴포넌트 내부에서만 사용해야 합니다.');
  }
  return context;
};

// Accordion 메인 컴포넌트
const Accordion = ({
  children,
  defaultIndex = -1,
  setActiveIndexFromParent = () => {},
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    setActiveIndex(defaultIndex);
  }, [defaultIndex]);

  // 클릭한 아이템이 열려있으면 닫고, 아니면 해당 인덱스의 아이템을 엽니다.
  const onChangeIndex = (index) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? -1 : index));
    setActiveIndexFromParent(index);
  };

  return (
    <ul className="faq-list">
      {Children.map(children, (child, index) =>
        child ? (
          <AccordionContext.Provider
            key={index}
            value={{ isActive: activeIndex === index, index, onChangeIndex }}
          >
            {child}
          </AccordionContext.Provider>
        ) : null
      )}
    </ul>
  );
};

// Accordion 아이템 컴포넌트 (Header + Panel 포함)
const Item = ({ children }) => {
  return <li className="faq-item">{children}</li>;
};

// Accordion 헤더 컴포넌트
const Header = ({ category, subCategory, title }) => {
  const { isActive, index, onChangeIndex } = useAccordionContext();

  return (
    <motion.div
      className={`faq-header ${isActive ? 'active' : ''}`}
      onClick={() => onChangeIndex(index)}
    >
      <h4 className="a">
        <button type="button" data-ui-click="dropdown-toggle">
          <em>{category}</em>
          {subCategory && <em>{subCategory}</em>}
          <strong>{title}</strong>
        </button>
      </h4>
    </motion.div>
  );
};

// Accordion 패널 컴포넌트
const Panel = ({ content }) => {
  const { isActive } = useAccordionContext();

  // 패널 컨테이너 애니메이션 variants
  const panelVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: [1, 0, 0.2, 1] },
        opacity: { duration: 0.3, ease: [1, 0, 0.2, 1], delay: 0.2 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.6, ease: [1, 0, 0.2, 1] },
        opacity: { duration: 0.2, ease: [1, 0, 0.2, 1] },
      },
    },
  };

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          className="q"
          data-ui-target="true"
          initial="closed"
          animate="open"
          exit="closed"
          variants={panelVariants}
          style={{ overflow: 'hidden' }}
        >
          <motion.div className="inner">
            {/* `dangerouslySetInnerHTML`을 사용하여 HTML answer 렌더링 */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 메인 컴포넌트에 추가
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;

// DisplayName 설정
Item.displayName = 'Accordion.Item';
Header.displayName = 'Accordion.Header';
Panel.displayName = 'Accordion.Panel';

export default Accordion;
