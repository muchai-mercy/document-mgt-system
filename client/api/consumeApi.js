import request from "superagent";

export const postEndpoint = (endpoint => {
  const url = endpoint;
  return (
    request
    .post(url)
  )
});

export const getEndpoint = (endpoint => {
  const url = endpoint;
  return (
    request
    .get(url)
  )
});



