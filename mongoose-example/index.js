const dbapi = require('./dbapi');

// Session.findOne({ '_session_token': 'r:836d2f39e0a94abbcdfe51206cde24a2' }).then((session) => {
//   console.log(session && session.isExpired());
// });

// const user = db.User.login('username', 'password');
// Session.create(user)

// const user = db.User.login(username, new VaultAdapter(`secrets/${username}`));
/**
 * VaultAdapter.read();
 * VaultAdapter.write();
 */

// dbapi.User.signIn({ username: 'fupslot@gmail.com', password: 'password' })
//   .then((user) => {
//     console.dir(user, { colors: true });
//   }).catch((error) => {
//     console.log(error)
//   });

dbapi.User.login('fupslot@gmail.com', 'password')
  .then((user) => {
    return dbapi.Session.create(user).then((session) => {
      console.dir(user, { colors: true });
      console.dir(session, { colors: true });
    });
  }).catch((error) => {
    console.error(error);
  });