import axios from "axios";
import { API_BASE_URL } from "../../helpers/consts";

export function apiSubmitContact(payload) {
  return axios.post(`${API_BASE_URL}/api/contact/`, payload);
}
