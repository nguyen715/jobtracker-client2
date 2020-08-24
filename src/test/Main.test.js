import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Context from '../context/Context';

import Main from '../components/Main/Main.js';

// const context = useContext(Context);

describe('Main component', () => {
  it('renders the UI as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
    .toJSON()

    expect(tree).toMatchSnapshot()
  })
})