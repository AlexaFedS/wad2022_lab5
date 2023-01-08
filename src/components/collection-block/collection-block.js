import React, {useState} from "react";
import { BsCollection } from 'react-icons/bs';
import './collection-block.css';
import { CollectorMenu } from "../collect-menu";
import {useSelector} from "react-redux";
import { ItemsInCollector } from "../items-in-collector";

export const CollectionBlock = () => {
    const [isCollectorMenuVisible, setIsCollectorMenuVisible] = useState(false);
    const items = useSelector(state => state.collector.itemsInCollector);
    return(
        <div className='collection-block'>
            <ItemsInCollector quantity={items.length}/>
            <BsCollection size={24} onClick={() => setIsCollectorMenuVisible(!isCollectorMenuVisible)}/>
            { isCollectorMenuVisible && <CollectorMenu items={items} onClick={() => setIsCollectorMenuVisible(true)}/>}
        </div>
    )
}