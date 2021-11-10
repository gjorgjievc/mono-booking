import CategoryButton from './category-button';

export default {
  component: CategoryButton,
  title: 'CategoryButton',
};

const Template = (args) => <CategoryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
