import React,{useEffect} from 'react'
import { connect } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../../Components/SpinnnerLoader/Loading'
import { getItems } from '../../../Redux/Data/Actions.Data'
import AddItemList from './AddItemList';
import Listitem from './Listitem';

// const TodoList = () => {

//     const {ListRED:{listItems=[], isLoading, error}} = useSelector(state => state) || {};
//     const dispatch= useDispatch();
//     useEffect( ()=> {
//         dispatch(getItems)
//     }, [] )
//     return (
//         <div>
//             <h2>To Do List:</h2>
//             <AddItemList />
//             <hr />
//             { !isLoading 
//                 ? listItems.map(item=> <Listitem key={item.id} listItem={item} /> )
//                 : <Loading />}
//         </div>
//     )
// }

// export default TodoList


class TodoList extends React.Component{

    componentDidMount(){
        console.log('mounting')
        this.props.getItemsAction()
    }

    render(){
        return (
            <div>
                <h2>To Do List:</h2>
                <AddItemList />
                <hr />
                { !this.props.isLoading 
                    ? this.props.listItems.map(item=> <Listitem key={item.id} listItem={item} /> )
                    : <Loading />}
            </div>
        )
    }
}


const mapStateToProps= (state)=> ({
    listItems: state.ListRED.listItems,
    isLoading: state.ListRED.isLoading,
    error: state.ListRED.error
})

const mapDispatchToProps= (dispatch)=> ({
    getItemsAction: ()=> dispatch(getItems())
})



export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


