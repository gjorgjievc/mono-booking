import './card.module.css';
export const Card = ({serviceName, icon}) => {
  return (
      <div style={{ cursor: 'pointer', border: '1px solid', display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
          <div>
              <img src={icon} alt=""/>
          </div>
          <div>
              <span>{serviceName}</span>
          </div>
      </div>
  )
}
export default Card;
