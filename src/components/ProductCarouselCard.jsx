import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Chip, Snackbar, Alert } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Style/carusel.css';

const ProductCarouselCard = ({ title, products, numImg }) => {
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
    const [selectedSize, setSelectedSize] = useState(null); // Talla seleccionada
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Estado del diálogo
    const [showError, setShowError] = useState(false); // Estado para manejar el error

    const handleProductClick = (product) => {
        localStorage.setItem('tennisVer', JSON.stringify(product));
        console.log('Producto seleccionado:', product);
        navigate('/VistaTennis');
    };

    const handleAddToCartClick = (product) => {
        setSelectedProduct(product);
        setIsDialogOpen(true); // Abre el diálogo
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            setShowError(true); // Muestra el error si no hay talla seleccionada
            return;
        }

        const tennisConTalla = {
            ...selectedProduct,
            selectedSize,
        };

        // Obtiene el carrito actual del localStorage
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart, tennisConTalla];

        // Guarda el carrito actualizado en el localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log('Producto agregado al carrito:', tennisConTalla);

        // Cierra el diálogo y resetea los estados
        setIsDialogOpen(false);
        setSelectedSize(null);
        setSelectedProduct(null);
    };

    return (
        <div style={styles.card}>
            <p style={styles.title}>{title}</p>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={numImg}
                navigation
                style={styles.swiper}
            >
                {products.map((product, index) => (
                    <SwiperSlide
                        className="swiper-slide-custom"
                        style={{ backgroundColor: 'white' }}
                        key={index}
                    >
                        <div style={styles.product} onClick={() => handleProductClick(product)}>
                            <img src={product.image} style={styles.image} />
                            <p style={styles.productName}>{product.name}</p>
                            <p style={styles.productDescription}>{product.description}</p>
                            <p style={styles.productPrice}>
                                Mex{' '}
                                {new Intl.NumberFormat('es-MX', {
                                    style: 'currency',
                                    currency: 'MXN',
                                }).format(product.price)}
                            </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#FF5722',
                                    '&:hover': { backgroundColor: '#E64A19' },
                                }}
                                variant="contained"
                                startIcon={<AddShoppingCartIcon />}
                                onClick={() => handleAddToCartClick(product)}
                            >
                                Agregar al carrito
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Diálogo para seleccionar talla */}
            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                <DialogTitle>Selecciona tu talla</DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {['4', '5', '6', '7', '8', '9'].map((size) => (
                            <Chip
                                style={{ fontSize: '18px' }}
                                key={size}
                                label={`Talla ${size}`}
                                clickable
                                onClick={() => handleSizeSelect(size)}
                                color={selectedSize === size ? 'warning' : 'default'}
                                variant={selectedSize === size ? 'filled' : 'outlined'}
                            />
                        ))}
                    </div>
                    {selectedSize && (
                        <p style={{ marginTop: '10px' }}>Talla seleccionada: {selectedSize}</p>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
                    <Button
                        onClick={handleAddToCart}
                        variant="contained"
                        sx={{
                            backgroundColor: '#FF5722',
                            '&:hover': { backgroundColor: '#E64A19' },
                        }}
                    >
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar para mostrar error */}
            <Snackbar
                open={showError}
                autoHideDuration={3000}
                onClose={() => setShowError(false)}
            >
                <Alert
                    onClose={() => setShowError(false)}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    Por favor, selecciona una talla antes de continuar.
                </Alert>
            </Snackbar>
        </div>
    );
};

const styles = {
    card: {
        width: '100%',
    },
    title: {
        fontSize: '18px',
        textAlign: 'Left',
    },
    product: {
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
    },
    productName: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: '16px',
        color: '#5555',
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: '16px',
    },
};

export default ProductCarouselCard;
