import TreatmentCard from './treatment-card';

export default {
  component: TreatmentCard,
  title: 'TreatmentCard',
};

const Template = (args) => <TreatmentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
