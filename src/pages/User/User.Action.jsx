import axios from "axios";

const getSelf = token => async dispatch => {
  const result = await axios.get("/api/v1/self", {
    headers: { authorization: `Bearer ${token}` }
  });

  if (result && result.status === 200) {
    const { payload } = result.data;
    dispatch({
      type: "GET_USER",
      payload
    });
  }
};

export { getSelf };
