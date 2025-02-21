import ProcessPresenter from './ProcessPresenter';

export default {
  title: 'Process',
  component: ProcessPresenter,
};

const Template = (args) => <ProcessPresenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '이용 프로세스 안내',
  processItems: [
    {
      title: '문의 등록',
      description:
        '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
    },
    {
      title: '관리자 설정',
      description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
    },
    {
      title: '임직원 가입',
      description: '사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
    },
    {
      title: '서비스 이용',
      description:
        '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
    },
  ],
};
