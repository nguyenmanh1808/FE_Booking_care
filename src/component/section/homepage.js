import './homepage.scss'
import { CiSearch } from "react-icons/ci";
import { BsHospital } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { BiBuildingHouse } from "react-icons/bi";
import { FaMicroscope } from "react-icons/fa";
import { PiHeadCircuitDuotone } from "react-icons/pi";
import { FaTooth } from "react-icons/fa";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
// Import Swiper styles
import 'swiper/css';
import chamcuu from '../../access/cham-cuu.png'

const Homepage = ()=>{

    const swiperRef = useRef(null);

    return (
       <>
         <div className='home-header-banner'>
            <div className='tiltle-1'>NỀN TẢNG Y TẾ</div>
            <div className='tiltle-2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
            <div className='search'>
                <CiSearch />
                <input type='text' placeholder='Tìm chuyên khoa khám bệnh'  /> 
            </div>
        <div className='option'>
            <div className='option-child'>
              <div className='child-icon'><BsHospital /></div>
              <div className='child-text'>Khám Chuyên khoa</div>
                </div>
          <div className='option-child'>
              <div className='child-icon'><SlScreenSmartphone /></div>
              <div className='child-text'>Khám từ xa</div>
          </div>
          <div className='option-child'>
              <div className='child-icon'><BiBuildingHouse /></div>
              <div className='child-text'>Khám tổng quát</div>
          </div>
          <div className='option-child'>
              <div className='child-icon'><FaMicroscope /></div>
              <div className='child-text'>Xét nghiệm y học</div>
          </div>
          <div className='option-child'>
              <div className='child-icon'><PiHeadCircuitDuotone /></div>
              <div className='child-text'>Sức khỏe tinh thần</div>
          </div>
          <div className='option-child'>
              <div className='child-icon'><FaTooth /></div>
              <div className='child-text'>Khám nha khoa</div>
          </div>
        </div>
         </div>
            <div className='section-container'>
                <div className='section-1'>
                <div className='category-name'><h5>Chuyên khoa</h5></div>
                <button className='prev-slide' onClick={() => swiperRef.current?.slidePrev()}> &lt; </button>
                <button className='next-slide' onClick={() => swiperRef.current?.slideNext()}> &gt; </button>
                <div className='content-slide'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        onSlideChange
                        onSwiper={(swiper) =>(swiperRef.current = swiper)}
                        >
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
                </div>
                <div className='section-2'>
                <div className='category-name'><h5>Cơ sở y tế nổi bật</h5></div>
                <button className='prev-slide' onClick={() => swiperRef.current?.slidePrev()}> &lt; </button>
                <button className='next-slide' onClick={() => swiperRef.current?.slideNext()}> &gt; </button>
                <div className='content-slide'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        onSlideChange
                        onSwiper={(swiper) =>(swiperRef.current = swiper)}
                        >
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
                </div>
                <div className='section-3'>
                <div className='category-name'><h5>Bác sỹ nổi bật tuần qua</h5></div>
                <button className='prev-slide' onClick={() => swiperRef.current?.slidePrev()}> &lt; </button>
                <button className='next-slide' onClick={() => swiperRef.current?.slideNext()}> &gt; </button>
                <div className='content-slide'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        onSlideChange
                        onSwiper={(swiper) =>(swiperRef.current = swiper)}
                        >
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
                </div>
            </div>
            
            
       </>
    )
}

export default Homepage;