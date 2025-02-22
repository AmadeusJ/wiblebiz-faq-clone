import Modal from './Modal';

export default {
  title: 'Global UI/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: '모달 메시지',
  isOpen: true,
  style: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '200px',
  },
};
