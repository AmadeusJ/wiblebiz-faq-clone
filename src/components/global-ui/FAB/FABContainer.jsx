import FAB from './FAB';

const FABContainer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FAB onClick={handleClick} />
    </>
  );
};

export default FABContainer;
