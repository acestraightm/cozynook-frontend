import axios from "axios";
import { API_BASE_URL } from "../../helpers/consts";

export function fetchActivities() {
  return axios.get(`${API_BASE_URL}/api/activities/fetch/`);
}
