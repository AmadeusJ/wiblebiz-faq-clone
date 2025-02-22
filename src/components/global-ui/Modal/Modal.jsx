import useGlobalPortal from '@/hooks/useGlobalPortal';

const Modal = ({ message, isOpen, onClose }) => {
  const portal = useGlobalPortal();

  if (!isOpen) return null; // 모달이 열리지 않으면 렌더링 안 함

  return portal(
    <dialog className="dialog-wrapper dialog-error">
      <div className="dialog-header">
        <button type="button" className="close" onClick={onClose}>
          닫기
        </button>
      </div>
      <div className="dialog-body">
        <p className="message">{message}</p>
        <button
          type="button"
          className="btn-xlg btn-tertiary"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
