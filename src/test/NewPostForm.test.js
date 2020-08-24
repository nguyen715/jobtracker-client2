import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Context from '../context/Context';

import NewPostForm from '../components/NewPostForm/NewPostForm.js';

// const context = useContext(Context);

describe('NewPostForm component', () => {
  it('renders the UI as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <NewPostForm />
      </BrowserRouter>
    )
    .toJSON()

    expect(tree).toMatchSnapshot()
  })
})