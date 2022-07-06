import React, { useState, useEffect, Fragment, useMemo } from "react";
import { utils } from "react-modern-calendar-datepicker";
import moment from "moment";
import { Row, Col, Divider, Rate, Image, Typography, Modal, Button } from "antd";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import * as S from "./styles";
import "./styles.css";

function compareCalendarDate(d1, d2) {
  if (utils().isBeforeDate(d1, d2)) return -1;
  else if (utils().isBeforeDate(d2, d1)) return 1;
  else return 0;
}

const BookingDetails = (props) => {
  const { house } = props;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDayRange = {
    from: null,
    to: null,
  };
  const minimumDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [selectedDayRange, setSelectedDayRange] = useState(defaultDayRange);
  const [galleryImages, setGalleryImages] = useState([]);
  const [visibleGallery, setVisibleGallery] = useState(false);
  const [disabledDays, setDisabledDays] = useState([]);
  const [reservedDays, setReservedDays] = useState([]);
  const reservedNights = useMemo(() => {
    let nights = [];
    house.reservations.forEach((reservation) => {
      let dateFrom = moment(reservation.date_from, "yyyy-MM-DD").toDate(),
        dateTo = moment(reservation.date_to, "yyyy-MM-DD").toDate();
      for (let d = dateFrom; d < dateTo; ) {
        nights.push({
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate(),
        });
        d.setDate(d.getDate() + 1);
      }
    });
    return nights;
  }, [house]);

  useEffect(() => {
    setGalleryImages(
      house.photos.map((photo) => ({
        original: photo.image,
        thumbnail: photo.thumbnail,
      }))
    );
    const days = [],
      days1 = [];
    house.reservations.forEach((reservation) => {
      let dateFrom = moment(reservation.date_from, "yyyy-MM-DD").toDate(),
        dateTo = moment(reservation.date_to, "yyyy-MM-DD").toDate();
      // Set disabled days
      dateFrom.setDate(dateFrom.getDate() + 1);
      dateTo.setDate(dateTo.getDate() - 1);
      for (let d = dateFrom; d <= dateTo; ) {
        days.push({
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate(),
        });
        d.setDate(d.getDate() + 1);
      }

      // Set reserved days
      dateFrom = moment(reservation.date_from, "yyyy-MM-DD").toDate();
      const df = {
        year: dateFrom.getFullYear(),
        month: dateFrom.getMonth() + 1,
        day: dateFrom.getDate(),
      };
      dateTo = moment(reservation.date_to, "yyyy-MM-DD").toDate();
      const dt = {
        year: dateTo.getFullYear(),
        month: dateTo.getMonth() + 1,
        day: dateTo.getDate(),
      };
      if (days1.find((d) => compareCalendarDate(d, df) === 0)) {
        days.push(df);
      }
      if (days1.find((d) => compareCalendarDate(d, dt) === 0)) {
        days.push(dt);
      }

      for (let d = dateFrom, i = 0; d <= dateTo; i++) {
        days1.push({
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate(),
          className: `reservedDay${i === 0 ? " reservedDay-start" : d.getDate() === dateTo.getDate() ? " reservedDay-end" : ""}`,
        });
        d.setDate(d.getDate() + 1);
      }
    });

    setDisabledDays(days);
    setReservedDays(days1);
    setDateFrom(null);
    setDateTo(null);
    setSelectedDayRange(defaultDayRange);
  }, [house]);

  const onChangeDayRange = (range) => {
    if (range.from && range.to) {
      if (reservedNights.find((night) => compareCalendarDate(night, range.from) >= 0 && compareCalendarDate(night, range.to) < 0)) {
        Modal.error({
          title: "Error",
          content: "The selected dates look like overlapping with another booking.",
          onOk: () => {
            setDateFrom(null);
            setDateTo(null);
            setSelectedDayRange(defaultDayRange);
          }
        });
        return;
      }
    }

    setSelectedDayRange(range);
    if (range.from) setDateFrom(new Date(range.from.year, range.from.month - 1, range.from.day));
    else setDateFrom(null);

    if (range.to) setDateTo(new Date(range.to.year, range.to.month - 1, range.to.day));
    else setDateTo(null);
  };

  const calcTotalPrice = () => {
    const nights = moment(dateTo).diff(moment(dateFrom), "days");
    if (Number.isNaN(nights)) return "-";
    else return (house.base_price * nights).toFixed(2);
  };

  const handleSubmit = () => {
    if (!dateTo || !dateFrom) {
      Modal.error({
        title: "Error",
        content: "The dates seem to be selected correctly.",
      });
      return;
    }

    Modal.confirm({
      title: "Confirm your dates",
      content: "Are you sure that the booking dates are correct?",
      onOk: () => {
        if (props.onSubmit) {
          props.onSubmit(dateFrom, dateTo);
        }
      },
    });
  };

  return (
    <Fragment>
      <Modal
        className=""
        title=""
        visible={visibleGallery}
        footer={null}
        width={1200}
        maskClosable
        centered
        closable={false}
        onCancel={() => setVisibleGallery(false)}
        modalRender={(modal) => <div class="modal-content-transparent">{modal}</div>}
      >
        <ImageGallery items={galleryImages} autoPlay={true} showFullscreenButton={false} showIndex={true} />
      </Modal>
      <S.CalendarWrapper>
        <Row gutter={[20, 20]} align="middle">
          <Col lg={14} md={12} sm={24} xs={24}>
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              {house.name}
            </Typography.Title>
            <Image src={`${house.title_image}`} />
            <div style={{ textAlign: "center", marginTop: -10 }}>
              <S.DetailsButton onClick={() => setVisibleGallery(true)}>+</S.DetailsButton>
            </div>
          </Col>
          <Col lg={10} md={12} sm={24} xs={24}>
            <S.CalendarContainer>
              <S.DaysContainer>
                <div style={{ textAlign: "center" }}>
                  <div className="value-lg">{dateFrom ? moment(dateFrom).format("DD MMM") : "-"}</div>
                  <div className="label-sm">Start Date</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div className="value-lg">{dateTo ? moment(dateTo).format("DD MMM") : "-"}</div>
                  <div className="label-sm">End Date</div>
                </div>
              </S.DaysContainer>
              <Divider style={{ marginTop: 0, marginBottom: 0 }} />
              <Calendar
                selectorStartingYear={2020}
                value={selectedDayRange}
                onChange={onChangeDayRange}
                minimumDate={minimumDate}
                colorPrimary="#c69c6d" // added this
                colorPrimaryLight="#c4d1d2" // and this
                disabledDays={disabledDays}
                customDaysClassName={reservedDays}
                style={{
                  fontWeight: "bold",
                }}
                shouldHighlightWeekends
              />
            </S.CalendarContainer>
            {/* <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
              <S.ConfirmDatesButton>Confirm Dates</S.ConfirmDatesButton>
            </div> */}
          </Col>
        </Row>
      </S.CalendarWrapper>
      <Row align="middle">
        <Col md={13}>
          <S.RoomDetailsContainer>
            <Row style={{ marginBottom: "1.5em" }}>
              <Col sm={16}>
                <Rate value={house.rating.score} disabled style={{ color: "#f28e22", display: "inline-block" }} />
              </Col>
              <Col sm={8}>
                <span className="value-md" style={{ flex: 1, display: "flex" }}>
                  {house.persons} Persons
                </span>
              </Col>
            </Row>
            <Row>
              <Col sm={16}>
                <div className="label-sm">Choose Date</div>
                <div className="value-md">
                  {dateFrom ? moment(dateFrom).format("DD MMM") : ""} - {dateTo ? moment(dateTo).format("DD MMM") : ""}
                </div>
              </Col>
              <Col sm={8}>
                <div className="label-sm">Price</div>
                <div className="value-md">$ {calcTotalPrice()}</div>
                <div className="label-sm">($ {house.base_price.toFixed(2)} per night)</div>
              </Col>
            </Row>
          </S.RoomDetailsContainer>
        </Col>
        <Col md={11} style={{ paddingLeft: 30, paddingRight: 30 }}>
          {/* <S.BookNowButton onClick={handleSubmit}>Book Now</S.BookNowButton> */}
          <Button
            type="primary"
            shape="round"
            size="large"
            loading={props.submitting || false}
            onClick={handleSubmit}
            block
            style={{ fontSize: "1.5rem", height: 80 }}
          >
            Book Now
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default BookingDetails;
