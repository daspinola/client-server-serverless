module.exports.serverDate = async event => {
  const serverDate = new Date()
  return {
    statusCode: 200,
    body: JSON.stringify({
      serverDate
    }),
  };
};
