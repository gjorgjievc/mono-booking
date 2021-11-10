import React, { useEffect, useState } from "react";
import { defaultItems } from "../api/data";
import { Row, Col } from "antd";
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';

import { Card, ServicesList } from '@pab/pabau-lib'

import Treatments from './Treatments';


const Services = () => {
    const [ list, setList ] = useState([]);
    const [ active, setActive ] = useState('Botox')
    const [ subCategory, setSubCategory ] = useState([]);
    const [ selected, setSelected ] = useState([])
    const [ hideOnline, setHideOnline ] = useState(false);

    
    useEffect(() => {
        handleAll()
        handleActive(active)
    },[])

    // hendlaj klik na Master Kategorija
    const handleList = (serviceName, firstCategory) => {
        const arr = []
        console.log(firstCategory)
        defaultItems.filter(service => {
            if(service.name === serviceName) {
                service.category.map(n => arr.push({
                    name: n.name,
                    rndValue: n.rdmValue,
               
                }))
            }
        }
        )
        setList(arr)
        handleActive(firstCategory)
    }

    // hendlaj klik na All (master kategorija )
    const handleAll = () => {
        const arr = []
        defaultItems.map(service => {
            return (
                service.category.map(n => arr.push({
                    name: n.name,
                    rndValue: n.rdmValue,
                    
                    })   
                )
            )
        })
        setList(arr)
        // setActive()
        handleActive('Botox')
    }

    // hendlaj aktivna kategorija i zacuvaj podatoci vo niza
    const handleActive = (category) => {
        const arr = []
        defaultItems.filter(cat => {
                cat.category.map(c => {
                    if(category == c.name){
                        c.subCategory.map(subc => {
                            arr.push(subc)
                            // vidi dali ima onlajn parametar? vo subCategorijata (ova treba rabota ama nemozam krajot da mu go najdam)
                            if(subc.online === undefined){
                                setHideOnline(true)
                                console.log('eve go', subCategory[0].online)
                            } else {
                                setHideOnline(false)
                            }  
                            
                        })

                    }
                }
                )
        })
        setSubCategory(arr)
        setActive(category) 
    }
    
    // Hendlaj gi tretmanite sho se selektirani i cuvaj gi vo stejt
    const handleSelect = (treatmentName) => {
        
        if(selected.length === 0) {
            setSelected([treatmentName])
        } else {
               if(selected.includes(treatmentName)){
                    setSelected(selected.filter(t => t !== treatmentName))
                } else {
                    setSelected([...selected, treatmentName])
                }
        }
    }
    console.log(selected)
    return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                <Row justify="space-between" align="middle" style={{display: "flex", border: "1px solid", width: '700px'}}>
                    <Col span={3} > 
                        <Card onClick={handleAll} icon={AppstoreOutlined} serviceName="All" /> 
                    </Col>
                {
                    defaultItems.map(service => 
                        <Col span={3} >
                           <Card
                                onClick={handleList}
                                key={service.name} 
                                icon={service.icon} 
                                serviceName={service.name}
                                categoryName={service.category[0].name} 
                            />  
                        </Col>
                    )
                }
                
                </Row>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <ServicesList 
                    services={list} 
                    handleActive={handleActive} 
                    size={'large'} 
                    itemLayout={'horizontal'} 
                    bordered={'true'} 
                />
                <Treatments 
                    treatments={subCategory} 
                    select={handleSelect} 
                    hideOnline={hideOnline}
                />
            </div>
            <div>
                <div style={{position: 'fixed'}}>
                    You've selected {selected.length} treatments
                </div>
            </div>
         </>
    )
}

export default Services;