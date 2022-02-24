enum Example {
  USER,
  MODERATOR,
  ADMIN,
}

const user = {
  type: 0,
};

if (user.type === Example.USER) {
  console.log('Użytkownik');
} else if (user.type === Example.MODERATOR) {
  console.log('Moderator');
} else if (user.type === Example.ADMIN) {
  console.log('Admin');
}
