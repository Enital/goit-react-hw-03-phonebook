import React from "react";

function ContactItem({id, name, number}) {
    
    return (
        // <li key={id}>
            <span>{name}: {number}</span>
        // </li>
    )
}

export default ContactItem;