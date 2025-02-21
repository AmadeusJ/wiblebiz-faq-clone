import InputField from './InputField';

export default {
  title: 'UI/InputField',
  component: InputField,
  argTypes: {
    type: { control: 'select' },
    placeholder: { control: 'text' },
  },
  args: {
    type: 'text',
    placeholder: '입력해주세요',
  },
};

export const Default = (args) => (
  <InputField {...args}>
    <InputField.Button className="submit">검색</InputField.Button>
  </InputField>
);
