import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../../Components/SpinnnerLoader/Loading'
import { getItems } from '../../../Redux/Data/Actions.Data';
import AddItemList from './AddItemList';
import Listitem from './Listitem';

const TodoList = () => {

    const {ListRED:{listItems=[], isLoading, error}} = useSelector(state => state) || {};
    const dispatch= useDispatch();
    useEffect( ()=> {
        dispatch(getItems)
    }, [] )
    return (
        <div>
            <h2>To Do List:</h2>
            <AddItemList />
            <hr />
            { !isLoading 
                ? listItems.map(item=> <Listitem key={item.id} listItem={item} /> )
                : <Loading />}
        </div>
    )
}

export default TodoList
