import React, { useEffect, useState } from 'react';
import TreatmentCard from './TreatmentCard';
import { TreatmentButtons } from './TreatmentButtons';

const Treatments = ({ 
    treatments, 
    select, 
    hideOnline, 
    inClinic, 
    handleInClinic 
}) => {
    
    return (
        <div>
            <TreatmentButtons handleInClinic={handleInClinic} hideOnline={hideOnline} /> 
            {  inClinic &&
                treatments.map(t => {
                    
                    if(t.online === false || t.online === undefined)
                    return (
                    <TreatmentCard 
                        name={t.name}
                        rating={t.rating}
                        review={t.review}
                        time={t.time}
                        price={t.price}
                        online={t.online}
                        select={select}
                    />
                    )

                })
            }
            {
                !inClinic && 
                treatments.map(t => {
                    if(t.online === true )
                    return (
                    <TreatmentCard 
                        name={t.name}
                        rating={t.rating}
                        review={t.review}
                        time={t.time}
                        price={t.price}
                        online={t.online}
                        select={select}
                    />
                    )

                })
            }
        </div>
    )
}

export default Treatments;