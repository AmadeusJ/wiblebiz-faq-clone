import AppInfoPresenter from './AppInfoPresenter';

export default {
  title: 'AppInfo',
  component: AppInfoPresenter,
};

const Template = (args) => <AppInfoPresenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=kor.mop.user.app',
      platform: 'gp',
    },
    {
      title: 'App Store',
      href: 'https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794',
      platform: 'as',
    },
  ],
};
