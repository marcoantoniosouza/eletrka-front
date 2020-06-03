import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt } from 'react-icons/fa';

import "./styles.css"

export default function Header() {
    return (
        <header>
            <h1 className="header-title" ><Link to="/"><FaBolt/>ELETRKA</Link></h1>
        </header>
    );
}