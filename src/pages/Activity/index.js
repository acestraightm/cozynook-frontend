import { lazy, useState, useEffect } from "react";
import { Row, Col, Carousel, Image } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

import SvgIcon from "../../common/SvgIcon";
import Button from "../../common/Button";

import * as S from "./styles";
import { fetchActivities } from "./service";

const Container = lazy(() => import("../../common/Container"));
const MainCarousel = lazy(() => import("./MainCarousel"));

const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities().then((response) => {
      const activities = response.data;
      setActivities(activities);
    });
  }, []);
  return (
    <Container>
      <MainCarousel
        visibleArrows={true}
        style={{ marginTop: 30 }}
        items={activities.map((activity, index) => {
          return (
            <Row type="flex" justify="space-between" gutter={[48, 48]} key={index}>
              <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                <S.ContentWrapper>
                  <S.Title>ACTIVITATI</S.Title>
                  <S.Content>{activity.description}</S.Content>
                  {/* <S.ButtonWrapper>
                  <Button width="true" style={{ border: "none" }} onClick={() => {}}>
                    ...mai mult
                  </Button>
                </S.ButtonWrapper> */}
                </S.ContentWrapper>
              </Col>
              <Col xl={16} lg={16} md={12} sm={24} xs={24}>
                <div>
                  <Image src={activity.image} />
                </div>
                <S.HireLabel>inchiriere</S.HireLabel>
                <S.HireLabel>
                  <span style={{ color: "#c69c6d" }}>{activity.name}</span> {activity.base_price.toFixed(2)} LEI/ZI
                </S.HireLabel>
                {/* <div>
                <S.BookButton onClick={() => {}}>Book Now</S.BookButton>
              </div> */}
              </Col>
            </Row>
          );
        })}
      />
    </Container>
  );
};

export default Activity;
