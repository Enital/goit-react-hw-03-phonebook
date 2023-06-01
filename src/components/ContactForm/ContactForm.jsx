import React from "react";
import { nanoid } from "nanoid";

import css from './contactForm.module.css'

class ContactForm extends React.Component{
    state = {
        name: '',
        number: '',
    }

handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
};

handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ id: nanoid(), name: this.state.name, number: this.state.number });
    this.reset();
};

reset = () => {
    this.setState({ name: '', number: ''});
}

render() {
    
    return (
        <form onSubmit={this.handleSubmit} className={css.form}>
            <label className={css.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
                    className={css.input}
                />
            
            <label className={css.label}>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    value={this.state.number}
                    className={css.input}
            />
            
            <button type="submit" className={css.button}>Add contact</button>
        </form>
    )
}
}

export default ContactForm;