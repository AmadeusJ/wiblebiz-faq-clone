import { AnimatePresence, motion } from 'framer-motion';
import { Children, createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionContext 컴포넌트 내부에서만 사용해야 합니다.');
  }
  return context;
};

// Accordion 메인 컴포넌트
const Accordion = ({ children, defaultIndex = -1 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // 클릭한 아이템이 열려있으면 닫고, 아니면 해당 인덱스의 아이템을 엽니다.
  const onChangeIndex = (index) =>
    setActiveIndex((currentIndex) => (currentIndex === index ? -1 : index));

  const items = Children.map(children, (child, index) => {
    const isActive = activeIndex === index;
    return (
      <AccordionContext.Provider
        key={index}
        value={{ isActive, index, onChangeIndex }}
      >
        {child}
      </AccordionContext.Provider>
    );
  });

  return <ul className="faq-list">{items}</ul>;
};

// Accordion 헤더 컴포넌트
const Header = ({ children }) => {
  const { isActive, index, onChangeIndex } = useAccordionContext();

  return (
    <motion.li
      className={`faq-item ${isActive ? 'active show' : 'ing'}`}
      onClick={() => onChangeIndex(index)}
    >
      <h4 className="a">
        <button type="button" data-ui-click="dropdown-toggle">
          <em>서비스 상품</em>
          <strong>위블 비즈에서는 어떤 상품을 이용할 수 있나요?</strong>
        </button>
      </h4>
      {children}
    </motion.li>
  );
};

// Accordion 패널 컴포넌트
const Panel = ({ children }) => {
  const { isActive } = useAccordionContext();

  // 패널 컨테이너 애니메이션 variants: height와 opacity를 함께 조절
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

  // 내부 콘텐츠 애니메이션 variants: 텍스트가 닫힐 때 약간 위로 이동하며 사라짐
  const contentVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [1, 0, 0.2, 1], delay: 0.2 },
    },
    closed: {
      y: -10,
      opacity: 0,
      transition: { duration: 0.2, ease: [1, 0, 0.2, 1] },
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
          <motion.div className="inner" variants={contentVariants}>
            <p>
              <span
                css={{
                  fontSize: '13px',
                  color: 'rgba(106, 122, 135, 1)',
                  wordBreak: 'keep-all',
                }}
              >
                소속회사가 위블 비즈 이용 계약이 되어 있는 경우 업무 시간에는
                이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수
                있고(대여 요금은 소속 회사에서 부담), 비업무 시간에는 출퇴근 및
                주말 여가 개인용 차량을 이용할 수 있습니다.
              </span>
              {children}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 메인 컴포넌트에 추가
Accordion.Header = Header;
Accordion.Panel = Panel;

// DisplayName 설정
Header.displayName = 'Accordion.Header';
Panel.displayName = 'Accordion.Panel';

export default Accordion;
