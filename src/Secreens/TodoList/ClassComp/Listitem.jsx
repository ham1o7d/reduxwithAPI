import React from 'react'

class Listitem extends React.Component{
    render(){
        return (
            <div>
                {this.props.listItem.id}- {this.props.listItem.title}
                <hr />
            </div>
        )
    }
}

export default Listitem
