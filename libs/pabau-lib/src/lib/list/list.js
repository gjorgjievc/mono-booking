import './list.module.css';
import { List } from 'antd';

export const ServicesList = ({
  services, 
  handleActive, 
  size,
  bordered,
  itemLayout,
}) => {
  return (
      <List
          size={size}
          itemLayout={itemLayout}
          bordered={bordered}
          dataSource={services}
          renderItem={item => 
                          <List.Item 
                              onClick={() => handleActive(item.name)} 
                              key={item.name}
                              style={{cursor: 'pointer'}}
                          >
                              {item.name}&nbsp;
                              {item.rndValue}
                          </List.Item>
                      }
      />
  )
}
export default ServicesList;
