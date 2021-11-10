import TreatmentButton from './treatment-button';

export default {
  component: TreatmentButton,
  title: 'TreatmentButton',
};

const Template = (args) => <TreatmentButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
