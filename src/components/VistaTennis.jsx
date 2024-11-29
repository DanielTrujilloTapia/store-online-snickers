import { useState } from 'react';
import { Card, Chip, CardContent, Button } from '@mui/material';
import '../Style/TamañoFuente.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Anuncios from './Anuncios'

function VistaTennis() {
    

    const tennisVerString = localStorage.getItem('tennisVer'); // Obtiene el valor como cadena
    const tennisVer = tennisVerString ? JSON.parse(tennisVerString) : null; // Convierte a objeto si existe

    const [selectedSize, setSelectedSize] = useState(null); // Estado para la talla seleccionada
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };


    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            
            <Card style={{borderRadius:"0px", width:"90%", height:"650px", marginTop:"20px", display:"flex"}}>
                <div style={{width:"60%", display:"flex", flexDirection:"row"}}>
                    <div style={{ marginLeft:"50px", width:"100%", height:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <img src={tennisVer.image} style={{width:"80%", height:"80%"}}/>
                    </div>
                </div>

                <div style={{width:"40%", justifyItems:"center", alignContent:"center"}}>
                    
                    <Card style={{width:"95%", height:" 95%", boxShadow:"none"}}>
                        
                        <CardContent style={{marginBottom:"60px", padding:"0px 50px"}}>
                            <p className='title'>{tennisVer?.name || "Nombre no disponible"}</p>
                            <p className='subtitle'>{tennisVer?.description || "Descripcion no disponible"}</p>
                            <p className='text'>Mex {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(tennisVer?.price) || "Descripcion no disponible"}</p>
                        </CardContent>
                        <CardContent style={{marginBottom:"0px", padding:"0px 50px"}}>
                                <p className='subtitle'>Selecciona tu talla:</p>
                            <div style={{ display: "flex",  gap: "8px", flexWrap:"wrap" }}>
                                {["4", "5", "6", "7", "8", "9", ].map((size) => (
                                    <Chip style={{fontSize:"18px"}}
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
                                    <p style={{ visibility: "hidden" }} className="text">Talla seleccionada: </p>
                                )}
                            </div>
                        </CardContent>

                        <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                            <Button sx={{ marginTop:"10px", width:"350px", height:"50px", backgroundColor: '#FF5722', '&:hover': {backgroundColor: '#E64A19',},}} variant='contained' startIcon={<AddShoppingCartIcon />}>Agregar al carrito</Button>
                            <Button variant='contained' sx={{ marginTop:"20px", width:"350px", height:"50px", backgroundColor:"black"}}>Comprar ahora</Button>
                        </div>

                    </Card>
                </div>
            </Card>

        </div>
    )
}

export default VistaTennis