// import TreatmentButton from './treatment-button';
import nesto from '../../../../../apps/online-booking/src/assets/acne.svg';
import { TreatmentButton } from '@pab/pabau-lib';
import { MedicineBoxOutlined, DesktopOutlined } from '@ant-design/icons'


export default {
  component: TreatmentButton,
  title: 'TreatmentButton',
  args: {

   
  }
};

const Template = (args) => <TreatmentButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <MedicineBoxOutlined/>,
  buttonLabel: 'Your label'
};
