import React from "react";
import css from './filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, handleChange }) {
    return (
        <>
            <h3>Find contacts by name</h3>
            <label>
                <input
                    //   className={css.input}
                    // onChange={onChangeInput}
                    // value={filter}
                    type="text"
                    name='filter'
                    value={filter}
                    onChange={handleChange}
                    className={css.input}
                    />
                </label>
        </>
    )
}
export default Filter;
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};