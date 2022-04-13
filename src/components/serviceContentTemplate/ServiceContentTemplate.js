import './ServiceContentTemplate.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const ServiceContentTemplate = (props) => {
    return (
        <>
        <section className="service-content">
            <div className="service-content__inner">
                {
                    !props.dir ? 
                    <div className="service-content__slider">
                        <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation
                        loop={true}>
                            <SwiperSlide><img src="https://www.culture.ru/storage/images/ee686c5b-7773-53a6-8e81-dd4b3f03f09a" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.mds.yandex.net/get-zen_doc/4281215/pub_6077e1d550d6720e34347e95_6077f7c3b57e177a1c45d56c/scale_1200" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mykaleidoscope.ru/uploads/posts/2019-12/1575767350_1-1.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                        </Swiper>
                    </div> :
                    null
                }
                <div className="service-content__data">
                    <div className="service-content__name">{props.name}</div>
                    <div className="service-content__descr">{props.descr}</div>
                </div>
                {
                    props.dir ? 
                    <div className="service-content__slider">
                        <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation
                        loop={true}>
                            <SwiperSlide><img src="https://www.culture.ru/storage/images/ee686c5b-7773-53a6-8e81-dd4b3f03f09a" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.mds.yandex.net/get-zen_doc/4281215/pub_6077e1d550d6720e34347e95_6077f7c3b57e177a1c45d56c/scale_1200" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mykaleidoscope.ru/uploads/posts/2019-12/1575767350_1-1.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                        </Swiper>
                    </div> :
                    null
                }
            </div>
        </section>
        </>
    )
}  

export default ServiceContentTemplate;