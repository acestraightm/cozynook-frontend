import { Row, Col, Rate } from "antd";
import PropTypes from 'prop-types';

import * as S from "./styles";

const HouseThumbnail = ({house, selected, onClick}) => {
  return (
    <S.Container onClick={onClick}>
      <Row gutter={[16, 0]} style={{ height: "100%" }}>
        <Col md={9} sm={9}>
          <S.ThumbImage image={`url('${house.thumbnail}')`} />
        </Col>
        <Col md={15} sm={15}>
          <div>
            <S.Title selected={selected}>{house.name}</S.Title>
            <S.Subtitle>{house.persons} Persons</S.Subtitle>
            <div>
              <Rate value={house.rating.score} disabled style={{ color: "#f28e22", display: "inline-block" }} />
              <div className="label-sm" style={{ display: "inline-block", marginLeft: 5 }}>
                ({house.rating.reviews} Reviews)
              </div>
            </div>
          </div>
          <div style={{marginTop: 20}}>
            <div className="label-sm" style={{ display: "inline-block" }}>
              from
            </div>
            <div className="value-md" style={{ display: "inline-block", marginLeft: 5 }}>
              $ {house.base_price.toFixed(2)}
            </div>
          </div>
        </Col>
      </Row>
    </S.Container>
  );
};

HouseThumbnail.defaultProps = {
  selected: false,
};

HouseThumbnail.propTypes = {
  house: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default HouseThumbnail;
