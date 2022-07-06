import React, { useState, useEffect } from "react";
import moment from "moment";
import { lazy } from "react";
import { Row, Col, notification } from "antd";
import Slide from "react-reveal/Slide";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import { apiCreateBooking, fetchHouses } from "./service";
import Modal from "antd/lib/modal/Modal";

const Container = lazy(() => import("../../common/Container"));
const HouseThumbnail = lazy(() => import("./components/HouseThumbnail"));
const BookingDetails = lazy(() => import("./components/BookingDetails"));

const Booking = () => {
  const [houses, setHouses] = useState([]);
  const [selHouse, selectHouse] = useState(undefined);
  const [submitting, setSubmitting] = useState(false);

  const refresh = () => {
    fetchHouses().then((response) => {
      const newHouses = response.data;
      setHouses(newHouses);
      if (selHouse) {
        const newSelHouse = newHouses.find(house => house.id === selHouse.id);
        if (newSelHouse) {
          selectHouse(newSelHouse);
        }
      }
    });
  }

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (houses.length > 0 && !selHouse) selectHouse(houses[0]);
  }, [houses, selHouse]);

  const selectHouseHandler = (house) => {
    selectHouse(house);
  };

  const handleSubmitBooking = (dateFrom, dateTo) => {
    if (!selHouse) {
      Modal.error({
        message: "Action Failed",
        description: "Please select a house to book.",
      });
      return;
    }

    setSubmitting(true);
    apiCreateBooking(selHouse.id, moment(dateFrom).format("yyyy-MM-DD"), moment(dateTo).format("yyyy-MM-DD"))
      .then((response) => {
        notification.success({
          message: "Action Success",
          description: "The house has been booked successfully.",
        });
        setSubmitting(false);
        refresh();
      })
      .catch((error) => {
        console.log(error.response);
        notification.error({
          message: "Action Failed",
          description: "Booking the house has been failed.",
        });
        setSubmitting(false);
      });
  };

  return (
    <Container>
      <Slide right>
        <Row type="flex" justify="space-between" gutter={[40, 0]}>
          <Col lg={16} md={24} sm={24} xs={24} style={{ paddingTop: 40 }}>
            {selHouse ? <BookingDetails house={selHouse} onSubmit={handleSubmitBooking} submitting={submitting} /> : null}
          </Col>
          <Col lg={8} md={24} sm={24} xs={24} style={{ paddingTop: 40 }}>
            <div style={{ height: 600 }}>
              {houses.map((house, index) => {
                return (
                  <HouseThumbnail
                    key={index}
                    house={house}
                    onClick={() => selectHouseHandler(house)}
                    selected={selHouse && selHouse.id === house.id}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Slide>
    </Container>
  );
};

export default Booking;
