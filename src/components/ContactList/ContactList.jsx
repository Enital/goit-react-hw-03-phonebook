import React from "react";
import PropTypes from 'prop-types';
// import ContactItem from "components/ContactItem/ContactItem";

import css from './contactList.module.css'

function ContactList ( {contacts, deleteContact }) {
    if (contacts) {
        return (
            <>
                <h2>Contacts</h2>
                <ul>
                    {contacts.map(({ id, name, number }) => {                    
                        return (
                            <li key={id} className={css.li}>
                                <span>{name}: {number}</span>
                            {/* <ContactItem name={name} number={number} /> */}
                            <button className={css.delete} type='button' onClick={() => deleteContact(id)}>Delete contact</button>
                        </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
}