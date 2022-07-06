import * as S from "./styles";
import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.CarouselArrow className={className} style={{ ...style }} onClick={onClick}>
      <LeftOutlined style={{ fontSize: 24, color: "white" }} />
    </S.CarouselArrow>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.CarouselArrow className={className} style={{ ...style }} onClick={onClick}>
      <RightOutlined style={{ fontSize: 24, color: "white" }} />
    </S.CarouselArrow>
  );
}

const MainCarousel = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: props.visibleArrows && <NextArrow />,
    prevArrow: props.visibleArrows && <PrevArrow />,
  };

  return (
    <Carousel {...settings} autoplay={false} arrows={true} style={{...props.style, paddingLeft: 48, paddingRight: 48}}>
      {props.items.map((item, index) => {
        return <div key={`${index}`} style={{marginLeft: 10, marginRight: 10, background: 'red'}}>
          {item}
        </div>;
      })}
    </Carousel>
  );
};

export default MainCarousel;
