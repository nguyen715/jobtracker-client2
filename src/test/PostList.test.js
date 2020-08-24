import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Context from '../context/Context';

import PostList from '../components/PostList/PostList.js';

// const context = useContext(Context);

describe('PostList component', () => {
  it('renders the UI as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <PostList />
      </BrowserRouter>
    )
    .toJSON()

    expect(tree).toMatchSnapshot()
  })
})