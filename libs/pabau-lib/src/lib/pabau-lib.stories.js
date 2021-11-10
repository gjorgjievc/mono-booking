import PabauLib from './pabau-lib';

export default {
  component: PabauLib,
  title: 'PabauLib',
};

const Template = (args) => <PabauLib {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
