import { useState, useEffect } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import '../Style/TamañoFuente.css'; // Importa los estilos de fuente

function Carrito() {
    const [cartItems, setCartItems] = useState([]); // Estado para almacenar los productos del carrito
    const [totalPrice, setTotalPrice] = useState(0); // Estado para almacenar el precio total
    const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para mostrar la alerta

    useEffect(() => {
        // Carga el carrito desde el localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);

        // Calcula el precio total
        calculateTotal(cart);
    }, []);

    // Función para calcular el precio total
    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    };

    // Función para eliminar un producto del carrito
    const handleRemoveItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1); // Elimina el producto seleccionado
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Actualiza el localStorage
        calculateTotal(updatedCart); // Recalcula el precio total
        setOpenSnackbar(true); // Muestra la alerta
    };

    // Función para cerrar la alerta
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <div style={styles.container}>
            <h1 className="title">Mi carrito de compras</h1>

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
                                    <p className="text">{item.name}</p>
                                    <p className="text">Talla: {item.selectedSize}</p>
                                    <p className="text">
                                        Precio:{' '}
                                        {new Intl.NumberFormat('es-MX', {
                                            style: 'currency',
                                            currency: 'MXN',
                                        }).format(item.price)}
                                    </p>
                                </div>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleRemoveItem(index)}
                                    style={styles.removeButton}
                                >
                                    Eliminar
                                </Button>
                            </div>
                        ))
                    ) : (
                        <p className="text">No tienes productos en el carrito.</p>
                    )}
                </div>

                <div style={styles.summary}>
                    <h2 className="subtitle">Resumen</h2>
                    <p className="text">
                        Total:{' '}
                        {new Intl.NumberFormat('es-MX', {
                            style: 'currency',
                            currency: 'MXN',
                        }).format(totalPrice)}
                    </p>
                </div>
            </div>

            {/* Alerta de eliminación */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Producto eliminado del carrito correctamente.
                </Alert>
            </Snackbar>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
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
    removeButton: {
        marginLeft: '10px',
    },
    summary: {
        flex: 1,
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
};

export default Carrito;
