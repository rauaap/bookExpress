const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
    getById: function(id, callback) {
        return db.query('select * from user_table where id_user=?', [id], callback);
    },
    getAll: function(callback) {
      return db.query('select * from user_table', callback);
    },
    add: function(user, callback) {
      bcrypt.hash(user.password, saltRounds, function(err, hash) {
        return db.query('insert into user_table (username, password) values(?,?)',
        [user.username, hash], callback);
      });
    },
    delete: function(id, callback) {
      return db.query('delete from user_table where id_user=?', [id],   callback);
    },
    update: function(id, user, callback) {
      bcrypt.hash(user.password, saltRounds, function(err, hash) {
        return db.query('update user_table set username=?, password=? where id_user=?',
        [user.username, hash, id], callback);
      });
    }

}

module.exports = user;
