import { useState } from 'react';
import { Card, Chip, CardContent, Button, Snackbar, Alert } from '@mui/material'; // Importa Snackbar y Alert para mostrar mensajes
import '../Style/TamañoFuente.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function VistaTennis() {
    const tennisVerString = localStorage.getItem('tennisVer'); // Obtiene el valor como cadena
    const tennisVer = tennisVerString ? JSON.parse(tennisVerString) : null; // Convierte a objeto si existe

    const [selectedSize, setSelectedSize] = useState(null); // Estado para la talla seleccionada
    const [showError, setShowError] = useState(false); // Estado para manejar el Snackbar de error

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const saveTennisWithSize = () => {
        const tennisConTalla = {
            ...tennisVer,
            selectedSize, // Añade la talla seleccionada al objeto
        };
        localStorage.setItem('tennisConTalla', JSON.stringify(tennisConTalla)); // Guarda en localStorage
        console.log('Guardado en localStorage:', tennisConTalla);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            setShowError(true); // Muestra el error si no hay talla seleccionada
            return;
        }
    
        // Crea el objeto combinando los datos de tennisVer y la talla seleccionada
        const tennisConTalla = {
            ...tennisVer,
            selectedSize,
        };
    
        // Obtén el array existente del localStorage (si no existe, usa un array vacío)
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Agrega el nuevo objeto al array
        const updatedCart = [...existingCart, tennisConTalla];
    
        // Guarda el array actualizado en el localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    
        console.log('Producto agregado al carrito:', tennisConTalla);
        console.log('Carrito actualizado:', updatedCart);
    };
    

    const handleBuyNow = () => {
        if (!selectedSize) {
            setShowError(true); // Muestra el error si no hay talla seleccionada
            return;
        }
        saveTennisWithSize();
        console.log('Producto listo para compra inmediata.');
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card style={{ borderRadius: "0px", width: "90%", height: "650px", marginTop: "20px", display: "flex" }}>
                <div style={{ width: "60%", display: "flex", flexDirection: "row" }}>
                    <div style={{ marginLeft: "50px", width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={tennisVer?.image} style={{ width: "80%", height: "80%" }} alt="Producto" />
                    </div>
                </div>

                <div style={{ width: "40%", justifyItems: "center", alignContent: "center" }}>
                    <Card style={{ width: "95%", height: "95%", boxShadow: "none" }}>
                        <CardContent style={{ marginBottom: "60px", padding: "0px 50px" }}>
                            <p className="title">{tennisVer?.name || "Nombre no disponible"}</p>
                            <p className="subtitle">{tennisVer?.description || "Descripción no disponible"}</p>
                            <p className="text">Mex {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(tennisVer?.price) || "Precio no disponible"}</p>
                        </CardContent>
                        <CardContent style={{ marginBottom: "0px", padding: "0px 50px" }}>
                            <p className="subtitle">Selecciona tu talla:</p>
                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                {["4", "5", "6", "7", "8", "9"].map((size) => (
                                    <Chip
                                        style={{ fontSize: "18px" }}
                                        key={size}
                                        label={`Talla ${size}`}
                                        clickable
                                        onClick={() => handleSizeSelect(size)}
                                        color={selectedSize === size ? "warning" : "default"}
                                        variant={selectedSize === size ? "filled" : "outlined"}
                                    />
                                ))}
                            </div>
                            <div style={{ height: "30px", margin: "30px 0px" }}>
                                {selectedSize ? (
                                    <p className="text">Talla seleccionada: {selectedSize}</p>
                                ) : (
                                    <p style={{ visibility: "hidden" }} className="text">Talla seleccionada:</p>
                                )}
                            </div>
                        </CardContent>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Button
                                sx={{ marginTop: "10px", width: "350px", height: "50px", backgroundColor: '#FF5722', '&:hover': { backgroundColor: '#E64A19' } }}
                                variant="contained"
                                startIcon={<AddShoppingCartIcon />}
                                onClick={handleAddToCart}
                            >
                                Agregar al carrito
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ marginTop: "20px", width: "350px", height: "50px", backgroundColor: "black" }}
                                onClick={handleBuyNow}
                            >
                                Comprar ahora
                            </Button>
                        </div>
                    </Card>
                </div>
            </Card>

            {/* Snackbar para mostrar error */}
            <Snackbar open={showError} autoHideDuration={3000} onClose={() => setShowError(false)}>
                <Alert onClose={() => setShowError(false)} severity="error" sx={{ width: '100%' }}>
                    Por favor, selecciona una talla antes de continuar.
                </Alert>
            </Snackbar>
        </div>
    );
}

export default VistaTennis;
