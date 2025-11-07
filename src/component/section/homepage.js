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

    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);
    const swiperRef3 = useRef(null);

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
                <button className='prev-slide-1' onClick={() => swiperRef1.current?.slidePrev()}> &lt; </button>
                <button className='next-slide-1' onClick={() => swiperRef1.current?.slideNext()}> &gt; </button>
                    <div className='content-slide'>
                         <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        onSlideChange
                        onSwiper={(swiper) =>(swiperRef1.current = swiper)}
                        >
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cham-cuu.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Châm cứu</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/cot-song.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Cột sống</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/co-xuong-khop.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Cơ xương khớp</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/san-phu-khoa.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Sản phụ khoa</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/sieu-am-thai.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Siêu âm thai</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/tai-mui-hong.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Tai muic họng</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/than-kinh.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Thần kinh</span>
                            </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/tieu-hoa.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Tiêu hóa</span>
                            </SwiperSlide>
                         <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/tim-mach.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Tim mạch</span>
                            </SwiperSlide>
                             <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/y-hoc-co-truyen.png`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Y học cổ truyền</span>
                        </SwiperSlide>
                    </Swiper>
                    
                </div>
                </div>
                <div className='section-2'>
                <div className='category-name'><h5>Cơ sở y tế nổi bật</h5></div>
                <button className='prev-slide-2' onClick={() => swiperRef2.current?.slidePrev()}> &lt; </button>
                <button className='next-slide-2' onClick={() => swiperRef2.current?.slideNext()}> &gt; </button>
                <div className='content-slide'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        onSlideChange
                        onSwiper={(swiper) =>(swiperRef2.current = swiper)}
                        >
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/co_so_y_te/abc.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Máy chụp</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/co_so_y_te/bv-nhi-ha-noi-1.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Cơ sở vật chất</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/co_so_y_te/may-gia-toc.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Máy gia tốc</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/co_so_y_te/ytecao.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Y tế nâng cao</span>
                        </SwiperSlide>
                     
                    </Swiper>
                </div>
                </div>
                <div className='section-3'>
                <div className='category-name'><h5>Bác sỹ nổi bật tuần qua</h5></div>
                <button className='prev-slide-3' onClick={() => swiperRef3.current?.slidePrev()}> &lt; </button>
                <button className='next-slide-3' onClick={() => swiperRef3.current?.slideNext()}> &gt; </button>
                <div className='content-slide'>
                   <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        onSlideChange
                        onSwiper={(swiper) =>(swiperRef3.current = swiper)}
                        >
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/Bac_sy/Ngo_duc_hai.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Bác sỹ Ngô Đức Hải</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/Bac_sy/nguyen_dinh_toi.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Bác sỹ Nguyễn Đình Tới</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/Bac_sy/pgs_ts_tran_binh.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>PGS.TS Trần Hữu Bình</span>
                        </SwiperSlide>
                        <SwiperSlide className='img-customize'>
                            <img src={require(`../../access/Bac_sy/thanh_van_nga.jpg`)} alt='' width='100%'  ></img>
                            <span className='style-section'>Thanh Vân Nga</span>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
                </div>
            </div>
            
            
       </>
    )
}

export default Homepage;