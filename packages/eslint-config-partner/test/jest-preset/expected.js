'use strict';

const Img = require('../../components/Img/Img');
const React = require('react');
const renderer = require('react-test-renderer');

test('Img renderes correctly', () => {
    const tree = renderer.create(<Img className='logo'/>).toJSON();

    expect(tree).toMatchSnapshot();
});
