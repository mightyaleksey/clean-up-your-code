import renderer from 'react-test-renderer';
import React from 'react';
test('Link renders correctly', () => {
  const tree = renderer.create(
    <a page="http://www.facebook.com">Facebook</a>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
