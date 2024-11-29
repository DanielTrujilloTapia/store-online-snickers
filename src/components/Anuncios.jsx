// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Tennis carousel component
const Anuncios = ({ products, numImg }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={numImg}
        autoplay={{
          delay: 5000, // Intervalo de 3 segundos para el cambio automático de imagen
          disableOnInteraction: false, // No detener el autoplay si se interactúa
        }}
        loop={true} // Hacer que el carrusel sea infinito
      >
        {products.map((product, index) => (
          <SwiperSlide style={{ backgroundColor: "white" }} key={index}>
            
              <img src={product.image} style={styles.image} alt={product.name} />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const styles = {
  image: {
    width: '100%',
    height: '400px',
    objectFit: ''
  }
};

export default Anuncios;
