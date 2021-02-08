import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer.component';
// import Timerbutton from '../Timerbutton/Timerbutton.component'


describe('rendering app componet' , ()=>{
    let container:any
    beforeEach(()=>(
        container = shallow(<Timer/>)))
        it('testing div' , ()=>{
            expect(container.find('div').length).toBeGreaterThanOrEqual(1)
        })
        it('checking timer component' , ()=>{
            expect(container.find('Timerbutton').length).toEqual(3)
        })
   
       
    })