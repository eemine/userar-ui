import axios from "axios";

const getPostById = (postId, token) => async dispatch => {
  const result = await axios.get(`/api/v1/media/${postId}`, {
    headers: { authorization: `Bearer ${token}` }
  });
  if (result && result.status === 200) {
    const { payload } = result.data;
    dispatch({
      type: "GET_POST",
      payload
    });
  }
};

const addComment = (postId, token, text) => async dispatch => {
  const result = await axios.post(
    `/api/v1/media/${postId}/comments`,
    { text },
    {
      headers: { authorization: `Bearer ${token}` }
    }
  );
  if (result && result.status === 200) {
    const { payload } = result.data;
    dispatch({
      type: "ADD_COMMENT",
      payload
    });
  }
};

export { getPostById, addComment };
