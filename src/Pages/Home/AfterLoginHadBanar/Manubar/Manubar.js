import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../components/Spinner/Spinner";
import { APIContext } from "../../../../contexts/APIProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Manubar = () => {
  const { categoryButton, isCategoryLoading } = useContext(APIContext);
  const [swiperRef, setSwiperRef] = useState(null);
  if (isCategoryLoading) {
    return <Spinner />;
  }
  return (
    <div style={{ width: "100%" }}>
      <ul
        className="menu menu-vertical lg:menu-horizontal bg-base-100 border my-8"
        style={{ width: "100%", alignItems: "center" }}
      >
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          // pagination={{
          //   type: "fraction",
          // }}
          // navigation={true}
          className="flex"
        >
          {categoryButton.map((category) => (
            <SwiperSlide
              className="py-3 mr-0"
              style={{
                width: "16px",
                marginRight: 0,
              }}
              key={category?._id}
            >
              <Link to={category?.CategoryName} className="p-2">
                {category?.CategoryName}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default Manubar;
