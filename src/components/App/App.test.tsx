// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';
// import Timer from '../Timer/Timer.component';



// describe('rendering app componet' , ()=>{
//     let container:any
//     beforeEach(()=>(
//         container = shallow(<App/>)))
//         it('testing div' , ()=>{
//             expect(container.find('div').length).toEqual(1)
//         })
//         it('testing timer' , ()=>{
//             expect(container.find(<Timer/>).length).toEqual(1)
//         })
   
       
//     })
// describe("App", () => {
//     let container:any
  
//     beforeEach(() => (container = shallow(<App />)))
  
//     it("should render a <div />", () => {
//       expect(container.find("div").length).toEqual(1)
//     })
  
//     it("should render the Timer Component", () => {
//       expect(container.containsMatchingElement(<Timer />)).toEqual(true)
//     })
//   })

import React from 'react';
import { shallow } from 'enzyme';
import App from './App.component';
import Timer from '../Timer/Timer.component';

describe("App", () => {
  let container : any;

  beforeEach(() => container = shallow(<App/>));

  it("Div Rendering", () => {
    expect(container.find('div').length).toEqual(1);
  })

  it("Timer Component Rendering", () => {
    expect(container.containsMatchingElement(<Timer/>)).toEqual(true);
  })
})