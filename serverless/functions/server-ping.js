module.exports = {
  handler:     'src/handlers/server/ping.handler',
  description: 'Simple function for ping server',

  events: [
    { http: { method: 'any', path: '/'            } },
    { http: { method: 'any', path: '/server/ping' } },
  ],
};
