import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <p className="brand-logo">{props.titulo}</p>
                </div>
            </nav>
        </div>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
}

export default Header;
