import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function 
Header(props) {
    
    const { onBack, title } = props;

    return (
        <div className="header">
            <i className="header-back fas fa-arrow-left" onClick={onBack}/>
            <h1 className="header-title">{title}</h1>
        </div>
    );
}

Header.propTypes = {
    onBack: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
