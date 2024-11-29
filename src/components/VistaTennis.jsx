import { Card, CardHeader, CardContent, CardActions, Typography, Button } from '@mui/material';


function VistaTennis() {

    const tennisVerString = localStorage.getItem('tennisVer'); // Obtiene el valor como cadena
    const tennisVer = tennisVerString ? JSON.parse(tennisVerString) : null; // Convierte a objeto si existe
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            
            <Card style={{borderRadius:"0px", width:"90%", height:"600px", marginTop:"20px", display:"flex"}}>
                <div style={{width:"60%", background:"aqua"}}>
                    luis
                </div>

                <div style={{width:"40%", justifyItems:"center", alignContent:"center"}}>
                    
                    <Card style={{width:"95%", height:" 95%", boxShadow:"none"}}>
                        <CardHeader
                          title={tennisVer?.name || "Nombre no disponible"}
                          subheader="Subtítulo"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Este es un contenido descriptivo dentro del card. Puedes añadir más texto o elementos aquí.
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Acción 1</Button>
                          <Button size="small">Acción 2</Button>
                        </CardActions>

                    </Card>
                </div>
            </Card>

        </div>
    )
}

export default VistaTennis