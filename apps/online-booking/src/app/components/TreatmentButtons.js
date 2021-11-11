import {TreatmentButton} from '@pab/pabau-lib'
import { MedicineBoxOutlined, DesktopOutlined } from '@ant-design/icons'


export const TreatmentButtons = ({ handleInClinic, hideOnline }) => {
    
    return (
        <div>
            { hideOnline ?
                <div className="oneButton">
                    <TreatmentButton 
                        icon={<MedicineBoxOutlined />} 
                        buttonLabel={'In Clinic'} 
                        onClick={() => handleInClinic(true)}
                    />
                </div>
            :
                <div className="twoButtons">
                    <TreatmentButton 
                        icon={<MedicineBoxOutlined />} 
                        buttonLabel={'In Clinic'} 
                        onClick={() => handleInClinic(true)} 
                    />

                    <TreatmentButton 
                        icon={<DesktopOutlined />} 
                        buttonLabel={'Virtual Consultation'} 
                        onClick={() => handleInClinic(false)} 
                    />
                </div>
            }
        </div>
    )
}
export default TreatmentButtons;