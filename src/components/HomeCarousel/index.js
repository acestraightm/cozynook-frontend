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

const HomeCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: props.visibleArrows && <SampleNextArrow />,
    prevArrow: props.visibleArrows && <SamplePrevArrow />,
  };

  return (
    <>
      <Carousel {...settings} autoplay={true} arrows={true}>
        <div >
          <Image src="/img/png/home-carousel-item-1.png" style={props.itemStyle} />
        </div>
        <div>
          <Image src="/img/png/home-carousel-item-2.png" style={props.itemStyle} />
        </div>
        <div>
          <Image src="/img/png/home-carousel-item-3.png" style={props.itemStyle} />
        </div>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
