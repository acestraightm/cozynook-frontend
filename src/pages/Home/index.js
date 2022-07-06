import { lazy, useEffect, useState } from "react";
import { Row, Col } from "antd";
import Slide from "react-reveal/Slide";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

import Button from "../../common/Button";

import * as S from "./styles";

import { fetchCarouselItems } from "./service";


const Container = lazy(() => import("../../common/Container"));
const MainCarousel = lazy(() => import("./Carousel"));

const Home = () => {
  const SocialLink = (props) => {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" key={props.href} aria-label={props.src} style={{ marginRight: 40 }}>
        {props.children}
      </a>
    );
  };

  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    fetchCarouselItems().then(response => {
      setCarouselItems(response.data);
    })
  }, []);

  return (
    <>
      <Container>
        <S.RightBlockContainer>
          <Row type="flex" justify="space-between" align="middle" gutter={24}>
            <Col lg={8} md={12} sm={24} xs={24}>
              <Slide left>
                <S.ContentWrapper>
                  <S.Logo />
                  <S.Title>
                    DESPRE <span style={{ color: "#c69c6d" }}>NOI!</span>
                  </S.Title>
                  <S.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ante ut leo facilisis laoreet ut lacinia turpis. Etiam eu ultrices
                    erat.
                  </S.Content>
                  <S.ButtonWrapper>
                    <Button width="true" style={{ border: "none" }} onClick={() => {}}>
                      ...mai mult
                    </Button>
                  </S.ButtonWrapper>
                </S.ContentWrapper>
              </Slide>
            </Col>
            <Col lg={16} md={12} sm={24} xs={24} style={{ paddingTop: 100 }}>
              <Slide right>
                <MainCarousel visibleArrows={true} items={carouselItems} />
              </Slide>
            </Col>
          </Row>
        </S.RightBlockContainer>
        <S.FooterContainer>
          <SocialLink href="https://github.com/Adrinlol/create-react-app-adrinlol">
            <FacebookFilled style={{ color: "white", fontSize: 24 }} />
          </SocialLink>
          <SocialLink href="https://twitter.com/Adrinlolx">
            <TwitterOutlined style={{ color: "white", fontSize: 24 }} />
          </SocialLink>
          <SocialLink href="https://instagram.com/Adrinlol/" src="instagram.svg">
            <InstagramOutlined style={{ color: "white", fontSize: 24 }} />
          </SocialLink>
        </S.FooterContainer>
      </Container>
    </>
  );
};

export default Home;
