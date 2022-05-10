import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// // Imports React into our test file.
// import React from 'react'

// // Imports Enzyme testing and deconstructs Shallow into our test file.
// import Enzyme, { shallow } from 'enzyme'

// // Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
// import Adapter from 'enzyme-adapter-react-16'

// // Imports in the component we are going to be testing.
// import App from './App'

// //Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
// Enzyme.configure({adapter: new Adapter()})


// describe("When App renders", ()=>{

//   let renderedApp 
//   beforeEach(()=>{
//     renderedApp = shallow(<App/>)
//   })



//   it("displays a Header and Footer", () => {
//     // expect something I can query to confirm my "it statment"
//     const renderedApp = shallow(<App/>)

//     const renderedHeader = renderedApp.find("Header")
//     const renderedFooter = renderedApp.find("Footer")


//     expect(renderedHeader.lenght).toEqual(1)
//     expect(renderedFooter.lenght).toEqual(1)
//   })
//   it("provies a route of '/' to the component", ()=>{
//     const renderedApp = shallow (<App />)

//     const renderedHomeRoute = renderedApp.find("[path='/']")
//     console.log("debug of renderedHomeRoute", renderedHomeRoute.debug())

//     expect(renderedHomeRoute.lenght).toEqual(1)

//   })
// })
