// Account.js
import React, { useState } from 'react';

// Estilos mejorados
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "450px",
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f8f9fa",
        border: "1px solid #ddd",
    },
    title: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#343a40",
        marginBottom: "20px",
        textAlign: "center",
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "20px",
    },
    button: {
        padding: "12px 15px",
        width: "32%",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s ease",
    },
    appleButton: {
        backgroundColor: "#333",
    },
    facebookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#db4437",
    },
    emailInput: {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "50px",
        fontSize: "16px",
        backgroundColor: "#fff",
        color: "#343a40",
    },
    checkboxLabel: {
        fontSize: "14px",
        marginLeft: "5px",
        color: "#666",
    },
    checkbox: {
        margin: "0 5px",
    },
    continueButton: {
        width: "100%",
        padding: "14px",
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "18px",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        marginTop: "20px",
        transition: "background-color 0.3s ease",
    },
    continueButtonHover: {
        backgroundColor: "#0056b3",
    },
    message: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#343a40", // Mensaje en negro
        textAlign: "center",
        marginTop: "20px",
    },
    textDescription: {
        fontSize: "14px",
        color: "#6c757d",
        textAlign: "center",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
    }
};

function Account() {
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(true);
    const [submitted, setSubmitted] = useState(false); // Estado para el mensaje
    const [loginMethod, setLoginMethod] = useState(""); // Método de login

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleCheckboxChange = () => setChecked(!checked);

    // Funciones para manejar clics en cada botón
    const handleSubmit = () => {
        setSubmitted(true);
        setLoginMethod("Continuar");
    };

    const handleLoginGoogle = () => {
        setSubmitted(true);
        setLoginMethod("Google");
    };

    const handleLoginFacebook = () => {
        setSubmitted(true);
        setLoginMethod("Facebook");
    };

    const handleLoginApple = () => {
        setSubmitted(true);
        setLoginMethod("Apple");
    };

    return (
        <div style={styles.container}>
            {/* Si el formulario ya fue enviado, mostrar mensaje de agradecimiento */}
            {submitted ? (
                <div style={styles.message}>
                    ¡Gracias por formar parte de nuestra familia de tenis! ({loginMethod})
                </div>
            ) : (
                <>
                    <h1 style={styles.title}>TUS BENEFICIOS DE SNAKER VAULT TE ESPERAN</h1>
                    <p style={styles.textDescription}>Realiza pedidos sin gastos de envío, consigue códigos descuento y productos exclusivos en SNAKER VAULT.</p>

                    <div style={styles.buttonsContainer}>
                        <button 
                            style={{...styles.button, ...styles.appleButton}} 
                            onClick={handleLoginApple}>🍏 Apple</button>
                        <button 
                            style={{...styles.button, ...styles.facebookButton}} 
                            onClick={handleLoginFacebook}>🔵 Facebook</button>
                        <button 
                            style={{...styles.button, ...styles.googleButton}} 
                            onClick={handleLoginGoogle}>🔴 Google</button>
                    </div>

                    <p style={styles.textDescription}>O ingresa con tu correo electrónico:</p>
                    <input
                        type="email"
                        placeholder="Correo electrónico *"
                        value={email}
                        onChange={handleEmailChange}
                        style={styles.emailInput}
                        required
                    />

                    <div>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleCheckboxChange}
                            style={styles.checkbox}
                        />
                        <label style={styles.checkboxLabel}>
                            He leído y acepto los <a href="#" style={styles.link}>Términos y Condiciones</a> del SNAKER VAULT y el <a href="#" style={styles.link}>Aviso de privacidad</a>.
                        </label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleCheckboxChange}
                            style={styles.checkbox}
                        />
                        <label style={styles.checkboxLabel}>
                            Mantener sesión iniciada. Aplicable a todas las opciones.
                        </label>
                    </div>

                    <button 
                        style={styles.continueButton} 
                        onClick={handleSubmit}
                        onMouseOver={(e) => e.target.style.backgroundColor = styles.continueButtonHover.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = styles.continueButton.backgroundColor}
                    >
                        CONTINUAR
                    </button>
                </>
            )}
        </div>
    );
}

export default Account;
