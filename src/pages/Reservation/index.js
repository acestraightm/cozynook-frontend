import { lazy } from "react";
import { Row, Col, Image } from "antd";
import Slide from "react-reveal/Slide";

import Anchor from "../../common/Anchor";

import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));
const HomeCarousel = lazy(() => import("../../components/HomeCarousel"));

const Reservation = () => {

  return (
    <>
      <Container>
        <Row type="flex" justify="space-between" align="middle" gutter={60}>
          <Col lg={16} md={12} sm={24} xs={24} style={{ paddingTop: 100 }}>
            <Slide left>
              <HomeCarousel />
            </Slide>
          </Col>
          <Col lg={8} md={12} sm={24} xs={24} style={{paddingTop: 100}}>
            <Slide right>
              <S.ContentWrapper>
                <S.Logo>
                  <span>cabană</span>
                  <Image src="/img/svg/logo-yellow-no-text.svg" preview={false} width={100} />
                </S.Logo>
                <S.Title>2 PERS.- 100 LEI/ZI</S.Title>
                <S.Subtitle>Description</S.Subtitle>
                <S.Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ante ut leo facilisis laoreet ut lacinia turpis. Etiam eu ultrices
                  erat.
                </S.Content>
                <S.ButtonWrapper>
                  <Anchor width="true" href="/reservation/booking">
                    Rezerva {">>"}
                  </Anchor>
                </S.ButtonWrapper>
              </S.ContentWrapper>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reservation;
