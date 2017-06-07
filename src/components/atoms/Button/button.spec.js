import React from 'react';
import expect from 'expect';
const TestUtils = require('react-dom/test-utils');

import Button from './button';


describe('Button', () => {
    it('renders without problems', () => {
        const button = TestUtils.renderIntoDocument(<Button />);
        expect(button).toExist();
    });
});