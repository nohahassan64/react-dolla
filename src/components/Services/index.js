import React from 'react'
import { dataServices } from './data'
import { ServicesContainer , ServicesH1 , ServicesWrapper ,
     ServicesCard , ServicesIcon , ServicesH2 , ServicesP } from './ServicesStyle'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                {dataServices.map( item => {
                    const {id , img , title , body } = item;
                    return(
                        <ServicesCard key={id}>
                            <ServicesIcon src={img} />
                            <ServicesH2>{title}</ServicesH2>
                            <ServicesP>{body}</ServicesP>
                        </ServicesCard>
                    );
                })}
            </ServicesWrapper>    
        </ServicesContainer>
    )
}

export default Services