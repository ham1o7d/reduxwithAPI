import React from 'react'
import { connect } from 'react-redux';
import { addListItem } from '../../../Redux/Data/Actions.Data';
import {v4 as uuidV4 } from 'uuid';

class AddItemList extends React.Component{
    
    state={
        item: ''
    }

    addItemHandle= ()=> {
        console.log('addItemHandle');
        if(this.state.item){
            this.props.addItemAction({
                title: this.state.item,
                id: uuidV4()
            })
            this.setState({item: ''});
        }
    }

    render(){
        return (
            <div>
                <input value={this.state.item} onChange={(e)=> this.setState({item: e.target.value})} placeholder='enter item' />
                <button onClick={this.addItemHandle}>add item</button>
            </div>
            )
    }
}

const mapDispatchToProps= (dispatch)=> ({
    addItemAction: (item)=> dispatch(addListItem(item))
})

export default connect(undefined, mapDispatchToProps)(AddItemList)
