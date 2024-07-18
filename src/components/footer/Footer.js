import React from 'react';
import './Footer.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Created by <b>Jonathan Gonzalez Botero<br/></b> &copy; {currentYear}</p>
        </footer>
    );
}
