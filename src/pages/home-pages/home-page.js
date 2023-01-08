import React from "react";
import './home-page.css';
import { DiseaseItem } from "../../components/disease-item";
import {Row} from 'react-bootstrap';



export const HomePage = () =>  {
    let diseases = [
        {
            id: 1,
            name: 'боль в горле',
            description: 'боль в горле',
            doctor: 'терапевт',
        },
        {
            id: 2,
            name: 'боль в животе',
            description: 'боль в животе',
            doctor: 'гастроэнтеролог',
        },
        {
            id: 3,
            name: 'болит зуб',
            description: 'болит зуб',
            doctor: 'стоматолог',
        },
    ]
    const disCart = diseases.map(disease => <DiseaseItem key={disease.id} disease={disease}/>)
    return(
        <div className="home-page">
            <Row xs={4} md={4} className="g-4">
                {disCart}
            </Row>
        </div>
    )
}