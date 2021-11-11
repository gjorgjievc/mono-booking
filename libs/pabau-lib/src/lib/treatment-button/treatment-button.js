import styles from './treatment-button.module.css';
export const TreatmentButton = ({ icon, onClick, buttonLabel }) => {
  return (
    <div>
      <div className={styles.buttonWithIcon} onClick={() => onClick()}>
          <span>{icon} </span> {buttonLabel}
        </div>
    </div>
  )
}
export default TreatmentButton;
