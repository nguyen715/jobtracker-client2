import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Context from '../context/Context';

import Welcome from '../components/Welcome/Welcome.js';

// const context = useContext(Context);

describe('Welcome component', () => {
  it('renders the UI as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    )
    .toJSON()

    expect(tree).toMatchSnapshot()
  })
})