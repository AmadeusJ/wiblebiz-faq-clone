import Icon from './Icon';

export default {
  title: 'UI/Icon',
  component: Icon,
};

export const IconList = () => {
  return (
    <div>
      <Icon name="download" />
      <Icon name="process01" />
      <Icon name="process02" />
      <Icon name="process03" />
      <Icon name="process04" />
      <Icon name="search" />
      <Icon name="step_arrow" />
      <Icon name="talk" />
      <Icon name="top" />
      <Icon name="write" />
    </div>
  );
};
