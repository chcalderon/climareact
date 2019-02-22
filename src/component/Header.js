import React from 'react';

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

export default Header;
