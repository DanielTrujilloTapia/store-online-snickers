import { Button } from '@mui/material';

function Envio() {

    const TokenDePago = JSON.parse(localStorage.getItem('pagoAhora'));

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Estado del Pedido</h2>
            <p style={styles.message}>Tu pedido está en proceso y llegará en <strong>2 días</strong>.</p>
            <div>
                <div>
                    <h3>Monto que se pagará:</h3>
                    {TokenDePago ? (
                        <>
                            <p>Nombre: {TokenDePago.name}</p>
                            <p>Nombre: {TokenDePago.price}</p>
                        </>
                    ) : (
                        <p>No hay información disponible.</p>
                    )}
                </div>

                <div>
                    <br />
                    <Button variant='contained' size='large'>Ver detalles del envio</Button>
                </div>
            </div>
        </div>


    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
    },
    message: {
        fontSize: '18px',
        color: '#555',
    },
};

export default Envio;
