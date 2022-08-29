module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '20bf793bde62b10374d01ceb22c04492'),
  },
});
