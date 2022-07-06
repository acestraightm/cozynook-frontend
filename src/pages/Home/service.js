import axios from "axios";
import { API_BASE_URL } from "../../helpers/consts";

export function fetchCarouselItems() {
  return axios.get(`${API_BASE_URL}/api/settings/carousel-images/fetch/`);
}