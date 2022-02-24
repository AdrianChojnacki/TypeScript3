enum Example {
  USER,
  MODERATOR,
  ADMIN,
  GOD = 12,
  TEST,
}

type UserTypes = 0 | 1 | 2;

interface User {
  type: UserTypes;
}

const user: User = {
  type: 4,
};

if (user.type === Example.USER) {
  console.log('Użytkownik');
} else if (user.type === Example.MODERATOR) {
  console.log('Moderator');
} else if (user.type === Example.ADMIN) {
  console.log('Admin');
}
