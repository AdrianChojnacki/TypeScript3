enum Example {
  ADD_USER = 'ADD_USER',
  EDIT_USER = 'EDIT_USER',
  REMOVE_USER = 'REMOVE_USER',
}

const exampleObject = {
  ADD_USER: 'ADD_USER',
  EDIT_USER: 'EDIT_USER',
  REMOVE_USER: 'REMOVE_USER',
};

exampleObject.ADD_USER = 'REMOVE_USER';

Example.ADD_USER = 'coś';

const test = exampleObject.ADD_USER;

console.log(test);
