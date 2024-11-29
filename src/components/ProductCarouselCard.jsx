// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Button} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Style/carusel.css'
import { Padding } from '@mui/icons-material';


// Tennis carousel component
const ProductCarouselCard = ({ title, products }) => {
  return (
    <div style={styles.card}>
      <p style={styles.title}>{title}</p>
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        style={styles.swiper}
        >

        {products.map((product, index) => (
          <SwiperSlide className="swiper-slide-custom" style={{backgroundColor: "white" }} key={index}>
            <div style={styles.product}>
              <img src={product.image} style={styles.image} />
              <p style={styles.productName}>{product.name}</p>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>Mex{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price)}</p>

            </div>
            <div style={{display:"flex",justifyContent:"center", marginBottom:"20px"}}>
              <Button sx={{ textTransform: 'none' ,backgroundColor: '#FF5722', '&:hover': {backgroundColor: '#E64A19',},}} variant='contained' startIcon={<AddShoppingCartIcon />}>Agregar al carrito</Button>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
  },
  title: {
    fontSize:"18px",
    textAlign: 'Left',
  },

  product: {
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },

  //DESCRIPCION DEL TENNIS
  productName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },

  productDescription: {
    fontSize: '16px',
    color: '#5555',
    fontWeight:"bold"
  },
  productPrice: {
    fontSize: '16px',
  }
};

export default ProductCarouselCard;
