import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Style/TamañoFuente.css";

function ProcesoPago() {
    const TokenDePago = JSON.parse(localStorage.getItem('pagoAhora'));


    const [deliveryOption, setDeliveryOption] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [address, setAddress] = useState({ street: "", city: "", postalCode: "" }); // Datos del domicilio
    const [paymentDetails, setPaymentDetails] = useState({ cardNumber: "", cardName: "", expiry: "", cvv: "" }); // Datos del pago

    const handleDeliveryChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handlePaymentDetailsChange = (e) => {
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    const handleConfirmPayment = () => {
        if (!deliveryOption || !paymentMethod) {
            alert("Por favor, selecciona una opción de entrega y un método de pago.");
            return;
        }
        if (deliveryOption === "home" && (!address.street || !address.city || !address.postalCode)) {
            alert("Por favor, completa los datos de tu domicilio.");
            return;
        }
        if (
            paymentMethod !== "transfer" &&
            (!paymentDetails.cardNumber || !paymentDetails.cardName || !paymentDetails.expiry || !paymentDetails.cvv)
        ) {
            alert("Por favor, completa los datos de tu método de pago.");
            return;
        }

        console.log("Opción de entrega:", deliveryOption);
        console.log("Datos del domicilio:", address);
        console.log("Método de pago:", paymentMethod);
        console.log("Detalles del pago:", paymentDetails);
        alert("¡Pago confirmado!");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Card style={{ width: "80%", padding: "20px", borderRadius: "10px" }}>
                <CardContent>
                    <Typography className="title" variant="h5" style={{ marginBottom: "20px" }}>
                        Proceso de Pago
                    </Typography>

                    {/* Opciones de entrega */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="delivery-options-content"
                            id="delivery-options-header"
                        >
                            <Typography className="subtitle">Opciones de entrega</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="delivery-options"
                                    name="delivery-options"
                                    value={deliveryOption}
                                    onChange={handleDeliveryChange}
                                >
                                    <FormControlLabel
                                        value="pickup"
                                        control={<Radio />}
                                        label="Recoger en punto de entrega"
                                    />
                                    <FormControlLabel
                                        value="home"
                                        control={<Radio />}
                                        label="Entregar en mi domicilio"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    {/* Datos del domicilio (se muestra solo si la opción es "home") */}
                    {deliveryOption === "home" && (
                        <Accordion style={{ marginTop: "20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="address-content"
                                id="address-header"
                            >
                                <Typography className="subtitle">Datos del domicilio</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Calle"
                                    name="street"
                                    value={address.street}
                                    onChange={handleAddressChange}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Ciudad"
                                    name="city"
                                    value={address.city}
                                    onChange={handleAddressChange}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Código Postal"
                                    name="postalCode"
                                    value={address.postalCode}
                                    onChange={handleAddressChange}
                                />
                            </AccordionDetails>
                        </Accordion>
                    )}

                    {/* Métodos de pago */}
                    <Accordion style={{ marginTop: "20px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="payment-methods-content"
                            id="payment-methods-header"
                        >
                            <Typography className="subtitle">Métodos de pago</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="payment-methods"
                                    name="payment-methods"
                                    value={paymentMethod}
                                    onChange={handlePaymentChange}
                                >
                                    <FormControlLabel
                                        value="credit-card"
                                        control={<Radio />}
                                        label="Tarjeta de crédito"
                                    />
                                    <FormControlLabel
                                        value="debit-card"
                                        control={<Radio />}
                                        label="Tarjeta de débito"
                                    />
                                    <FormControlLabel
                                        value="transfer"
                                        control={<Radio />}
                                        label="Transferencia bancaria"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    {/* Detalles del pago (se muestra solo si no es transferencia) */}
                    {paymentMethod !== "transfer" && paymentMethod && (
                        <Accordion style={{ marginTop: "20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="payment-details-content"
                                id="payment-details-header"
                            >
                                <Typography className="subtitle">Detalles del método de pago</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Número de tarjeta"
                                    name="cardNumber"
                                    value={paymentDetails.cardNumber}
                                    onChange={handlePaymentDetailsChange}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Nombre en la tarjeta"
                                    name="cardName"
                                    value={paymentDetails.cardName}
                                    onChange={handlePaymentDetailsChange}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Fecha de expiración (MM/AA)"
                                    name="expiry"
                                    value={paymentDetails.expiry}
                                    onChange={handlePaymentDetailsChange}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="CVV"
                                    name="cvv"
                                    value={paymentDetails.cvv}
                                    onChange={handlePaymentDetailsChange}
                                />
                            </AccordionDetails>
                        </Accordion>
                    )}

<div>
    <h3>Monto que se pagará:</h3>
    {TokenDePago ? (
        <>
            <p>Nombre: {TokenDePago.name}</p>
            <p>Precio: {TokenDePago.price}</p>
        </>
    ) : (
        <p>No hay información disponible.</p>
    )}
</div>


                    {/* Botón para confirmar el pago */}
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: "30px",
                            width: "100%",
                            backgroundColor: "#FF5722",
                            "&:hover": { backgroundColor: "#E64A19" },
                        }}
                        onClick={handleConfirmPayment}
                    >
                        Confirmar pago
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProcesoPago;
