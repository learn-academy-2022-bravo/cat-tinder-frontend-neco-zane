import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()}) 

describe("When the Footer renders", ()=> {
    it("shows 3 NavItems", ()=> { 
        const renderedFooter= shallow(<Footer/>)

        const renderedNavItems = renderedFooter.find("NavItem")

        expect(renderedNavItems.length).toEqual(3)

    })
})

