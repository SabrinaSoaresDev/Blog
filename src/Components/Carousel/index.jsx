import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Carousel = ({ images = [] }) => {
  // Se não houver imagens, mostra mensagem
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-30 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Nenhuma imagem para exibir</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={'fade'}
        speed={800}
        className="w-full h-full"
      >
    {images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className="w-full h-90 flex items-center justify-center">
        <img
          src={image}
          alt={`Imagem ${index + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
          }}
        />
      </div>
    </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;