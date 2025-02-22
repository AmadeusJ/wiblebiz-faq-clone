import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const useGlobalPortal = (id = 'global-portal') => {
  const [portalContainer] = useState(() => {
    let existingContainer = document.getElementById(id);
    if (!existingContainer) {
      existingContainer = document.createElement('div');
      existingContainer.id = id;
      document.body.appendChild(existingContainer);
    }
    return existingContainer;
  });

  useEffect(() => {
    return () => {
      if (portalContainer.parentNode) {
        portalContainer.parentNode.removeChild(portalContainer);
      }
    };
  }, [portalContainer]);

  return (children) => createPortal(children, portalContainer);
};

export default useGlobalPortal;
