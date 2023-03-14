import axios from "axios";
const baseUrl = "http://localhost:8080";

// Passing configuration object to axios
axios({
  method: "get",
  url: `${baseUrl}/api/users`,
}).then((response) => {
  console.log(response.data);
});

axios.get(`${baseUrl}/api/users/`).then((response) => {
  console.log(response.data);
});
