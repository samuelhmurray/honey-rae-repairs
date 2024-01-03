export const getAllTickets = () => {
  return fetch("http://localhost:8089/serviceTickets").then((res) =>
    res.json()
  );
};
