import React from 'react'
const Listitem = ({listItem}) => {
    return (
        <div>
            {listItem.id}- {listItem.title}
            <hr />
        </div>
    )
}

export default Listitem
