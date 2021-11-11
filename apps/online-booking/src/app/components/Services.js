import React, { useEffect, useState } from "react";
import { defaultItems } from "../api/data";
import { Row, Col } from "antd";
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';

import { Card, ServicesList } from '@pab/pabau-lib'

import Treatments from './Treatments';
import MasterCategories from "./MasterCategories";

const Services = () => {
    const [ data, setData ] = useState(defaultItems)
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
        data.filter(service => {
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
        data.map(service => {
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
    const handleActive = (categoryName) => {
        const arr = []
        data.filter(cat => {
                cat.category.map(c => {
                    if(categoryName == c.name){
                        c.subCategory.map(subc => {
                            arr.push(subc)
                            // vidi dali ima onlajn parametar vo subCategory
                            if(subc.online === undefined){
                                setHideOnline(true)
                                console.log('eve go', subCategory[0].online)
                            } else {
                                setHideOnline(false)
                            }
                            // setHideOnline(false)
                        })
                    }
                })
        })
        setSubCategory(arr)
        setActive(categoryName) 
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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                <MasterCategories 
                    data={data} 
                    handleAll={handleAll} 
                    handleList={handleList} 
                />
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
                    // inClinic={inClinic} 
                />
            </div>
            <div>
                <div style={{position: 'fixed'}}>
                    You've selected {selected.length} treatments
                </div>
            </div>
         </div>
    )
}

export default Services;