import ProductCarouselCard from "./ProductCarouselCard";

function Sneakers(){
    const products = [
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" },
        { name: "Tenis Nike Air Max", price: 120, image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61652f37-82e3-4807-b796-433f6fd958ef/NIKE+DUNK+LOW+%28PS%29.png" }
      ];

    return(
        <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
            
            <div style={{display:"flex", justifyContent:"center"}}>
                <ProductCarouselCard title="Tenis Populares" products={products} />
            </div>

        </div>
    )
    
}

export default Sneakers