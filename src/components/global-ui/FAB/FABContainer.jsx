import { useEffect, useState } from 'react';
import FAB from './FAB';

const FABContainer = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // 300px 이상 스크롤 시 FAB 표시
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <FAB isVisible={isVisible} onClick={onClick} />;
};

export default FABContainer;
