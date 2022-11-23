const formatDate = (date, format) => {
  if (date == 'undefined undefined') {
    return '';
  } else {
    const moment = require('moment');
    return moment(date).format(format);
  }
};

const today = () => {
  const moment = require('moment');
  return moment().format('DD-MM-YYYY');
};

const formatNumber = (value) => {
  if (value == undefined || isNaN(parseFloat(value))) {
    return 0;
  } else {
    let val = value / 1;
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
};

module.exports = { today, formatNumber };
