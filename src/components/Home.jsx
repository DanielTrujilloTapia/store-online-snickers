import ProductCarouselCard from './ProductCarouselCard'
import Anuncios from './Anuncios';

function Home() {

    
    

    const VistaAnuncios = [
        { image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_815,c_limit/cdad734a-68af-46a7-88cf-bd1888aa9b0a/calzado-vestimenta-y-accesorios-para-hombre.jpg" },
        { image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_815,c_limit/32288b12-61b5-49cd-abee-486c6a86dc63/calzado-vestimenta-y-accesorios-para-hombre.jpg" },
    ];

    const MasVendido = [
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
    ];

    return(
        <div>
            <div>
                <Anuncios products={VistaAnuncios} numImg={1} />
            </div>

            <div>
                <h3 style={{textAlign:"center", fontSize:"45px", margin:"15px"}}>Los mas vendidos del mes</h3>
                <ProductCarouselCard  products={MasVendido} numImg={4}/>
            </div>

        </div>
    )
}



export default Home