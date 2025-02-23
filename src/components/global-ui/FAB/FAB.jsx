import { motion } from 'framer-motion';

const FAB = ({ onClick, isVisible, ...props }) => {
  return (
    <motion.div
      className={`quick-util ${isVisible ? 'active' : ''}`}
      style={{ transformOrigin: '100% 30%' }}
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{
        scale: isVisible ? 1 : 0.8,
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      exit={{ scale: 0.8, opacity: 0, y: 50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
          exit={{
            width: 0,
            height: 0,
            opacity: 0,
          }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          whileTap={{ backgroundPosition: '50% 60%' }}
        >
          상단으로
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FAB;
