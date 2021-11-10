import { TreatmentButtons } from './TreatmentButtons';
import { TreatmentCard } from '@pab/pabau-lib';
import { useState } from 'react';

const Treatments = ({ 
    treatments, 
    select, 
    hideOnline
}) => {

    const [ inClinic, setInClinic ] = useState(true);
    
    const handleInClinic = (flag) => {
        setInClinic(flag)
    }
    
    return (
        <div>
            <TreatmentButtons handleInClinic={handleInClinic} hideOnline={hideOnline} /> 
            {  inClinic &&
                treatments.map(t => {
                    
                    if(t.online === false || t.online === undefined)
                    return (
                    <TreatmentCard 
                        serviceName={t.name}
                        serviceRating={t.rating}
                        serviceReview={t.review}
                        serviceTime={t.time}
                        servicePrice={t.price}
                        serviceOnline={t.online}
                        onClick={select}
                    />
                    )

                })
            }
            {
                !inClinic && 
                treatments.map(t => {
                    if(t.online === true)
                    return (
                        <TreatmentCard 
                            serviceName={t.name}
                            serviceRating={t.rating}
                            serviceReview={t.review}
                            serviceTime={t.time}
                            servicePrice={t.price}
                            serviceOnline={t.online}
                            onClick={select}
                        />
                    )

                })
            }
        </div>
    )
}

export default Treatments;