const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

// router
const categoriesRouter = require('./apps/api/v1/categories/router');
const imagesRouter = require('./apps/api/v1/images/router');
const talentsRouter = require('./apps/api/v1/talents/router');
const eventsRouter = require('./apps/api/v1/events/router');
const organizersRouter = require('./apps/api/v1/organizers/router');
const authCMSRouter = require('./apps/api/v1/auth/router');
const ordersRouter = require('./apps/api/v1/orders/router');
const participantsRouter = require('./apps/api/v1/participants/router');
const paymentsRouter = require('./apps/api/v1/payments/router');

const v1 = '/api/v1';

// middlewares
const notFoundMiddleware = require('./apps/middlewares/not-found');
const handleErrorMiddleware = require('./apps/middlewares/handle-error');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api',
  });
});
// app.use('/users', usersRouter);

app.use(`${v1}/cms`, categoriesRouter);
app.use(`${v1}/cms`, imagesRouter);
app.use(`${v1}/cms`, talentsRouter);
app.use(`${v1}/cms`, eventsRouter);
app.use(`${v1}/cms`, organizersRouter);
app.use(`${v1}/cms`, authCMSRouter);
app.use(`${v1}/cms`, ordersRouter);
app.use(`${v1}/cms`, paymentsRouter);
app.use(`${v1}`, participantsRouter);

// middleware use tidak boleh dibaca sebelum router
// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;