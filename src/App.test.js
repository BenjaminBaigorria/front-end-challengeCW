import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import App from './App';
import {Provider} from "react-redux"
import {store }from "./store/index"



test('should render render Navbar component', async () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>)
    const navbarelement=await screen.findByTestId("nav-1")
    expect(navbarelement).toBeInTheDocument()
});

test('should render render Container component', async () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>)
    const navbarelement=await screen.findByTestId("cont-1")
    expect(navbarelement).toBeInTheDocument()
});
