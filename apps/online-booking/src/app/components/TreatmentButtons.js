import React from 'react'

export const TreatmentButtons = ({ handleInClinic, hideOnline }) => {
    return (
        <div>
            { hideOnline ?
                        <div className="one-button">
                            <div onClick={() => handleInClinic(true) }>In Clinic</div>
                        </div>
                    :
                        <div className="two-buttons">
                            <div onClick={() => handleInClinic(true) }>In Clinic</div>
                            <div onClick={() => handleInClinic(false)}>Virtual</div>
                        </div>
            }
        </div>
    )
}
