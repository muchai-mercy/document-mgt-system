import request from "superagent";

// get endpoint
export const getEndpoint = (endpoint => {
  const url = endpoint;
  return (
    request
    .get(url)
  );
});

//post endpoint
export const postEndpoint = (endpoint => {
  const url = endpoint;
  return (
    request
    .post(url)
  );
});

//put endpoint
export const putEndpoint = (endpoint => {
  const url = endpoint;
  return (
    request
    .put(url)
  );
});

//delete endpoint
export const deleteEndpoint = (endpoint => {
  const url = endpoint;
  return (
    request
    .delete(url)
  );
});

