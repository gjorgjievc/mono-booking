import './treatment-card.module.css';

export const TreatmentCard = ({
    serviceName,
    serviceRating,
    serviceReview,
    serviceTime,
    servicePrice,
    onClick
}) => {
    
    return (
        <div onClick={() => onClick(serviceName)} style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', border: '1px solid', }}>
            <div>
            {serviceName} &nbsp; <span>${servicePrice}</span>
            </div>
            <div>
                {serviceTime}mins
            </div>
            <div>
            {serviceRating} | {serviceReview} reviews
            </div>
        </div>
    )
}

export default TreatmentCard;


