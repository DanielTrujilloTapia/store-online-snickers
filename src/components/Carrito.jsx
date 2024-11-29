import { useState, useEffect } from 'react';

function Carrito() {
    const [cartItems, setCartItems] = useState([]); // Estado para almacenar los productos del carrito
    const [totalPrice, setTotalPrice] = useState(0); // Estado para almacenar el precio total

    useEffect(() => {
        // Carga el carrito desde el localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);

        // Calcula el precio total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Mi carrito de compras</h1>

            <div style={styles.cartContainer}>
                <div style={styles.itemsList}>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} style={styles.item}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={styles.image}
                                />
                                <div style={styles.details}>
                                    <p style={styles.name}>{item.name}</p>
                                    <p style={styles.size}>Talla: {item.selectedSize}</p>
                                    <p style={styles.price}>
                                        Precio:{' '}
                                        {new Intl.NumberFormat('es-MX', {
                                            style: 'currency',
                                            currency: 'MXN',
                                        }).format(item.price)}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tienes productos en el carrito.</p>
                    )}
                </div>

                <div style={styles.summary}>
                    <h2>Resumen</h2>
                    <p>
                        Total:{' '}
                        {new Intl.NumberFormat('es-MX', {
                            style: 'currency',
                            currency: 'MXN',
                        }).format(totalPrice)}
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    cartContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
    },
    itemsList: {
        flex: 2,
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    image: {
        width: '80px',
        height: '80px',
        objectFit: 'cover',
        marginRight: '10px',
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    size: {
        fontSize: '14px',
        color: '#555',
    },
    price: {
        fontSize: '14px',
        color: '#333',
    },
    summary: {
        flex: 1,
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
};

export default Carrito;
