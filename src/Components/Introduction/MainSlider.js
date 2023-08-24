import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { introductionSliderData } from "../../Data/staticData";
import styles from "./MainSlider.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MainSlider() {
  return (
    <Swiper
      className={styles.mainSlider}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {introductionSliderData.map(
        ({ productName, productImg, logoImg, discountText, id }) => (
          <SwiperSlide className={styles.slide} key={id}>
            <img src={productImg} alt="product preview" />
            <div className={styles.content}>
              <div className={styles.nameProduct}>
                <img src={logoImg} alt="market logo" />
                <strong>{productName}</strong>
              </div>

              <h2 className={styles.discount}>{discountText}</h2>

              <button type="button" className={styles.shopNow}>
                <a href="\#">Shop Now</a>
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}

export default MainSlider;