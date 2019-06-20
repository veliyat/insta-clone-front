import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Nav from './Nav.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(function() {
  return {
    user: {}
  }
})

describe('NavTest', () => {
  it('Shows logout button when user is logged in', () => {
    const NavWrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    )
    expect(
      NavWrapper.find('.btn-outline-danger').first().text()
    ).toBe('Logout')
  })
})