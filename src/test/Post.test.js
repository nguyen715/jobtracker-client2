import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Context from '../context/Context';

import Post from '../components/Post/Post.js';

const context = useContext(Context);

describe('Post', () => {
  it('renders the UI as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Post />
      </BrowserRouter>
    )
    .toJSON()

    expect(tree).toMatchSnapshot()
  })
})