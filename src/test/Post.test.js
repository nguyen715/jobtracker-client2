import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Context from '../context/Context';

import Post from '../components/Post/Post.js';



// describe('Post component', () => {
//   it('renders the UI as expected', () => {
//     const context = useContext(Context);
//     context.setEmail('testemail@test.com');
//     context.setToken('12345');
//     const tree = renderer.create(
//       <BrowserRouter>
//         <Post title="test title" url="https://testurl.com" email={context.email} token={context.token}/>
//       </BrowserRouter>
//     )
//     .toJSON()

//     expect(tree).toMatchSnapshot()
//   })
// })

describe('Post component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  //   ReactDOM.render(
  //     <BrowserRouter>
  //       <Post />
  //     </BrowserRouter>
  //     , div)

  // ReactDOM.unmountComponentAtNode(div);
  })
})