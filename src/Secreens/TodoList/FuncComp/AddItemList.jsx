import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addListItem } from '../../../Redux/Data/Actions.Data';
import {v4 as uuidV4 } from 'uuid';

const AddItemList = ({translation}) => {

    const [item, setItem]= useState('');
    const dispatch= useDispatch();

    const addItemHandle= ()=> {
        console.log('addItemHandle');
        if(item){
            dispatch(addListItem({
                title: item,
                id: uuidV4()
            }))
            setItem('');
        }
    }
    return (
        <div>
            <input value={item} onChange={(e)=> setItem(e.target.value)} placeholder={translation('inputPlaceholder')} />
            <button onClick={addItemHandle}>{translation('addBtn')}</button> 
        </div>
    )
}

export default AddItemList
