import { Row, Col } from "antd";
import {Card} from '@pab/pabau-lib'

const MasterCategories = ({data, handleAll, handleList}) => {

    return(
        <Row justify="space-between" align="middle" style={{display: "flex", border: "1px solid", width: '700px'}}>
            <Col span={3} > 
                <Card onClick={() => handleAll()} serviceName="All" /> 
            </Col>
            {
                data.map(service => 
                    <Col span={3} >
                        <Card
                            onClick={() => handleList(service.name, service.category[0].name)}
                            key={service.name} 
                            icon={service.icon} 
                            serviceName={service.name}
                            categoryName={service.category[0].name} 
                        />  
                    </Col>
                )
            }
        </Row>
    )
}

export default MasterCategories;