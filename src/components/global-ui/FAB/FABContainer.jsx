import { useEffect, useState } from 'react';
import FAB from './FAB';

const FABContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // 300px 이상 스크롤 시 FAB 표시
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <FAB isVisible={isVisible} onClick={handleClick} />;
};

export default FABContainer;
