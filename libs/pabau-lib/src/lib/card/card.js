import './card.module.css';
export const Card = ({ onClick, serviceName, categoryName, icon}) => {
  return (
      <div onClick={() => onClick(serviceName, categoryName)} style={{  }} >
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
