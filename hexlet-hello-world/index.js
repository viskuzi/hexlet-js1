import _ from 'lodash';

console.log(_.last(['one', 'two']));
const fn = (a, b) => {
  const c = a + b;
  return c;
};
fn(1, 2);
