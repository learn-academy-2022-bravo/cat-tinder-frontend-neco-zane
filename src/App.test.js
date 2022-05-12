import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
Enzyme.configure({adapter: new Adapter()})

describe("When App Renders", ()=>{
  it("displays a Header and Footer", ()=>{
   const renderedApp = shallow(<App/>) 
   const renderedHeader = renderedApp.find("Header")
   const renderedFooter = renderedApp.find("Footer")
   expect(renderedHeader.length).toEqual(1)
   expect(renderedFooter.length).toEqual(1)
  })
  it("provides a route of '/' to the home component", ()=>{
    const renderedApp = shallow(<App/>) 

    const renderedHomeRoute = renderedApp.find("[path='/']")
    console.log("debug of renderedHomeRoute", renderedHomeRoute.debug())

    expect(renderedHomeRoute.length).toEqual(1)

  })
})