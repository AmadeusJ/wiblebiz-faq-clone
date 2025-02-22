import { motion } from 'framer-motion';

const FAB = ({ onClick, isVisible, ...props }) => {
  return (
    <motion.div
      className={`quick-util ${isVisible ? 'active' : ''}`} // 기존 CSS 클래스 유지
      animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      {...props}
    >
      <motion.div className="inner">
        <motion.button
          type="button"
          className="top"
          data-ui-click="scroll-top"
          onClick={onClick}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: isVisible ? '56px' : 0,
            height: isVisible ? '56px' : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          whileTap={{ backgroundPosition: '50% 60%' }}
        >
          상단으로
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FAB;
