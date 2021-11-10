import ServicesList from './list';

export default {
  component: ServicesList,
  title: 'ServicesList',
};

const Template = (args) => <ServicesList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
