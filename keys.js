console.log('this is loaded');

exports.mysql = {
  password: process.env.mysql_password,
  user: process.env.mysql_user
};