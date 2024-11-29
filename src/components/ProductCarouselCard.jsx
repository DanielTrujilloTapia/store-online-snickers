import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCarouselCard = ({ title, products }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      
      <div style={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20} // Espacio entre slides
          slidesPerView={5} // Muestra 5 imágenes a la vez
          navigation
        >
            
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div style={styles.product}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                />
                <h4 style={styles.productName}>{product.name}</h4>
                <p style={styles.productPrice}>${product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    width: "90%",
    backgroundColor: "#f9f9f9",
  },
  title: {
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },
  carouselWrapper: {
    width: "100%",
  },
  product: {
    textAlign: "center",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  productName: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  productPrice: {
    fontSize: "14px",
    color: "#888",
  },
};

export default ProductCarouselCard;
