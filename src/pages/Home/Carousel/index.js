import * as S from "./styles";
import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.CarouselArrow className={className} style={{ ...style }} onClick={onClick}>
      <LeftOutlined style={{ fontSize: 24, color: "white" }} />
    </S.CarouselArrow>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.CarouselArrow className={className} style={{ ...style }} onClick={onClick}>
      <RightOutlined style={{ fontSize: 24, color: "white" }} />
    </S.CarouselArrow>
  );
}

const MainCarousel = ({ visibleArrows, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: visibleArrows && <SampleNextArrow />,
    prevArrow: visibleArrows && <SamplePrevArrow />,
  };

  return (
    <>
      <Carousel {...settings} autoplay={true} arrows={true}>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <Image src={`${item.image}`} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default MainCarousel;
