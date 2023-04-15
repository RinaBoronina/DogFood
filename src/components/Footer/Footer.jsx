import React from 'react';
import './footer.css';
import Logo from '../Logo/Logo';

const links = [
    { name: 'Каталог товаров', src: '/' },
    { name: 'Избранное', src: '/' },
    { name: 'Корзина', src: '/' },
];

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__copy">
                    <Logo />
                    <span>©{new Date().getFullYear()}</span>
                </div>
                <ul className="footer__nav">
                    {links.map((el) => {
                        return (
                            <li key={el.name}>
                                <a href={el.src}>{el.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </footer>
        </>
    );
};
