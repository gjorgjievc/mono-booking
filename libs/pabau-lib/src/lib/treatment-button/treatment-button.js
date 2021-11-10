import './treatment-button.module.css';
export const TreatmentButton = ({ onClick, buttonLabel }) => {
  return (
    <div>
      <div onClick={() => onClick()}>{buttonLabel}</div>
    </div>
  )
}
export default TreatmentButton;
