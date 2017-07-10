import request from "superagent";


const doclabApiUrl = 'http://localhost:3030';
// get endpoint
export const getEndpoint = (endpoint => {
  const url = doclabApiUrl + endpoint;
  return (
    request
    .get(url)
  );
});

//post endpoint
export const postEndpoint = (endpoint => {
  const url = doclabApiUrl + endpoint;
  return (
    request
    .post(url)
  );
});

//put endpoint
export const putEndpoint = (endpoint => {
  const url = doclabApiUrl + endpoint;
  return (
    request
    .put(url)
  );
});

//delete endpoint
export const deleteEndpoint = (endpoint => {
  const url = doclabApiUrl + endpoint;
  return (
    request
    .delete(url)
  );
});

