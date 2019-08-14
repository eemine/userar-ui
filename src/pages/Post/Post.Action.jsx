import axios from "axios";

const getPostById = (postId, token) => async dispatch => {
  const result = await axios.get(`/api/v1/media/${postId}`, {
    headers: { authorization: `Bearer ${token}` }
  });
  if (result && result.status === 200) {
    const { payload } = result.body;
    dispatch({
      type: "GET_POST",
      payload
    });
  }
};

export { getPostById };
