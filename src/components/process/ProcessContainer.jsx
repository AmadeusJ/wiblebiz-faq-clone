import ProcessPresenter from './ProcessPresenter';

const ProcessContainer = () => {
  const title = '이용 프로세스 안내';
  const processItems = [
    {
      icon: 'process01',
      title: '문의 등록',
      description:
        '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
    },
    {
      icon: 'process02',
      title: '관리자 설정',
      description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
    },
    {
      icon: 'process03',
      title: '임직원 가입',
      description: '사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
    },
    {
      icon: 'process04',
      title: '서비스 이용',
      description:
        '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
    },
  ];
  return <ProcessPresenter title={title} processItems={processItems} />;
};

export default ProcessContainer;
