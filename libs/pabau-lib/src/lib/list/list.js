import './list.module.css';
export const List = ({
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
export default List;
