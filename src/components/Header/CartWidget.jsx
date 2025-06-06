
import React from 'react';
import { Link } from 'react-router';
import styles from './CartWidget.module.css';
import { useGlobalStates } from '../../context/Context';

const CartWidget = () => {
    const { calcularProductos } = useGlobalStates();
    
    return (
        <div className={styles.cartWidget}>
            <Link to="/cart" className={styles.cartLink} aria-label="Carrito de compras">
                <svg className={styles.cartIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M2 1a1 1 0 000 2h1.22l3.563 14.257A3 3 0 1010.83 19h4.342A3 3 0 1018 17H8.78l-.5-2H18c2.064 0 3.302-1.304 3.989-2.744.67-1.407.904-3.09.986-4.312C23.088 6.24 21.68 5 20.121 5H5.781L5.16 2.515A2 2 0 003.22 1H2zm16 12H7.78l-1.5-6h13.841c.553 0 .885.407.858.81-.076 1.142-.288 2.522-.795 3.585C19.692 12.425 19.02 13 18 13zm0 7.994a.994.994 0 110-1.988.994.994 0 010 1.988zM7.006 20a.994.994 0 101.988 0 .994.994 0 00-1.988 0z"
                        fill="currentColor"
                    />
                </svg>
                {calcularProductos > 0 && (
                    <span className={styles.itemCount}>{calcularProductos}</span>
                )}
            </Link>
        </div>
    );
};

export default CartWidget;