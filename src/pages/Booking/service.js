import axios from "axios";
import { API_BASE_URL } from "../../helpers/consts";

export function fetchHouses() {
  return axios.get(`${API_BASE_URL}/api/booking/houses/fetch/`);
}

export function apiCreateBooking(houseId, dateFrom, dateTo) {
  return axios.post(`${API_BASE_URL}/api/booking/bookings/`, { house: houseId, date_from: dateFrom, date_to: dateTo });
}
