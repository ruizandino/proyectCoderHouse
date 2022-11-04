import React from "react";

export const ItemListContainer = ({greeting}) => {
    console.log(greeting)
    return (
        <div>
            <p>{greeting}</p>
        </div>
    )
}
export default ItemListContainer