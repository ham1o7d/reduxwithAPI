import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../../Redux/Data/Actions.Data';
import AddItemList from './AddItemList';
import Listitem from './Listitem';

const TodoList = ({translation}) => {

    console.log(translation, 'translation');
    const {ListRED:{listItems=[], isLoading}} = useSelector(state => state) || {};
    const dispatch= useDispatch();
    useEffect( ()=> {
        dispatch(getItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return (
        <div>
            <h2>{translation('title')}</h2>
            <AddItemList translation={translation} />
            <hr />
            { !isLoading 
                ? listItems.map(item=> <Listitem key={item.id} listItem={item} /> )
                : <p>Loading...</p>}
        </div>
    )
}

export default TodoList
