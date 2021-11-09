import React from "react";
import { List } from 'antd';


const ServicesList = ({services, handleActive}) => {
    return (
        <List
            size="large"
            itemLayout="horizontal"
            bordered="true"
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