import React from 'react';
import { shallow } from 'enzyme';
// import Timer from './Timer.component';
import Timerbutton from './Timerbutton.component'


describe('rendering app componet' , ()=>{
    let container:any
    beforeEach(()=>(
        container = shallow(<Timerbutton/>)))
        it('testing div' , ()=>{
            expect(container.find('div').length).toBeGreaterThanOrEqual(1)
        })
        it('testing button' , ()=>{
            expect(container.find('button').length).toBeGreaterThanOrEqual(1)
        })

   
       
    })