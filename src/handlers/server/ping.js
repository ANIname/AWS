async function handler() {
  return {
    statusCode: 200,
    body:       JSON.stringify('Hello from Lambda!'),
  };
}

module.exports = { handler };
