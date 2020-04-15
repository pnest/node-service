// @flow

const UserModel = (source = {}) => {
  this.id = source.id;
  this.name = source.name;
  this.password = source.password;
  this.salt = source.salt;
};

module.exports = UserModel;
