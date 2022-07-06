import { lazy, useRef, useState, forwardRef } from "react";
import { compose, withProps } from "recompose";
import { Row, Col, Image, notification } from "antd";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import * as S from "./styles";
import { GOOGLE_API_KEY } from "../../helpers/consts";
import { apiSubmitContact } from "./service";

const Container = lazy(() => import("../../common/Container"));
const ContactForm = lazy(() => import("./components/ContactForm"));

const LocationMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `480px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.visibleMarker && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (values) => {
    setSubmitting(true);
    apiSubmitContact(values)
      .then((response) => {
        notification.success({
          message: "Action Success",
          description: "Your message has been sumitted successfully.",
        });
        setSubmitting(false);
        console.log(formRef.current);
        if (formRef.current) {
          formRef.current.initialize();
        }
      })
      .catch((error) => {
        console.log(error.response);
        notification.error({
          message: "Action Failed",
          description: "Submitting your message has been failed.",
        });
        setSubmitting(false);
      });
  }
  return (
    <Container>
      <Row gutter={[48, 48]}>
        <Col lg={8} md={12} sm={24} xs={24}>
          <Slide left>
            <S.ContactRow>
              <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#c69c6d", fontSize: 24 }} />
              <span style={{ marginLeft: 20 }}>Lorem ipsum dolar sit amet</span>
            </S.ContactRow>
            <S.ContactRow>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#c69c6d", fontSize: 28 }} />
              <span style={{ marginLeft: 20 }}>Lorem ipsum dolar sit amet</span>
            </S.ContactRow>
            <S.ContactRow>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#c69c6d", fontSize: 24 }} />
              <span style={{ marginLeft: 20 }}>Lorem ipsum dolar sit amet</span>
            </S.ContactRow>
            <ContactForm handleSubmit={handleSubmit} ref={formRef} submitting={submitting} />
          </Slide>
        </Col>
        <Col lg={16} md={12} sm={24} xs={24}>
          <Slide right>
            <S.Title>Contact us!</S.Title>
            <Row gutter={[16, 16]} align="middle" style={{marginBottom: 20}}>
              <Col lg={24}>
                <LocationMap visibleMarker={true} />
              </Col>
            </Row>
            <Row gutter={[32, 0]}>
              <Col flex="140px">
                <Image src="/img/svg/logo-yellow-no-text.svg" preview={false} style={{ width: "100%" }} />
                <S.Subtitle>About us</S.Subtitle>
              </Col>
              <Col flex="auto">
                <S.Description>
                  Company
                  <br />
                  What we do <br />
                  Help center Contact
                </S.Description>
              </Col>
            </Row>
          </Slide>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
