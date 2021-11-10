import React from 'react'
import {TreatmentButton} from '@pab/pabau-lib'

export const TreatmentButtons = ({ handleInClinic, hideOnline }) => {
    return (
        <div>
            { hideOnline ?
                        <div className="one-button">
                            <TreatmentButton buttonLabel={'In Clinic'} onClick={() => handleInClinic(true)}>In Clinic</TreatmentButton>
                        </div>
                    :
                        <div className="two-buttons">
                            <TreatmentButton buttonLabel={'In Clinic'} onClick={() => handleInClinic(true)}></TreatmentButton>
                            <TreatmentButton buttonLabel={'Virtual Consultation'} onClick={() => handleInClinic(false)}></TreatmentButton>
                        </div>
            }
        </div>
    )
}
export default TreatmentButtons;