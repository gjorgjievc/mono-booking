import styles from './treatment-card.module.css';

export const TreatmentCard = ({
    serviceName,
    serviceRating,
    serviceReview,
    serviceTime,
    servicePrice,
    onClick
}) => {
    
    return (
        <div onClick={() => onClick(serviceName)} className={styles.card}>
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


