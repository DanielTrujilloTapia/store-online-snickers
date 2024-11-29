import ProductCarouselCard from "./ProductCarouselCard";

function Sneakers(){
    const products = [
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", description: "Tenis para hombre", price: 45000 , image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" }
      ];

    return(
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <ProductCarouselCard title="Tenis para Hombres" products={products} numImg={4} />
            </div>
        </div>

    )
    
}

export default Sneakers