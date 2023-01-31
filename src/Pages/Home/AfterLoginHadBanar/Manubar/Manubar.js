import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../components/Spinner/Spinner";
import { APIContext } from "../../../../contexts/APIProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Manubar = () => {
  const { categoryButton, isCategoryLoading } = useContext(APIContext);
  // const [swiperRef, setSwiperRef] = useState(null);
  const {isDarkMode} = useContext(APIContext);
  if (isCategoryLoading) {
    return <Spinner />;
  }
  return (
    <div className="hidden md:block" style={{ width: "100%" }}>
      <ul
        className="menu menu-vertical lg:menu-horizontal bg-base-100 border my-8 w-full items-center"
        style={{ width: "100%", alignItems: "center" }}
      >
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          // pagination={{
          //   type: "function",
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
              <Link to={`/category/${category?.CategoryName}`} className={isDarkMode ?"text-gray-900 p-2":"p-2"}>
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
