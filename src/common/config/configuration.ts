import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,

    DATABASE: {
      HOST: process.env.DB_HOST,
      PORT: process.env.DB_PORT,
      USER: process.env.DB_USER,
      PASSWORD: process.env.DB_PASSWORD,
      DATABASE: process.env.DB_DATABASE,
      SYNC: !!process.env.DB_SYNC,
    },
  };
});
