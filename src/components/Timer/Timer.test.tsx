import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';



describe('rendering app componet' , ()=>{
    let container:any
    beforeEach(()=>(
        container = shallow(<Timer/>)))
        it('testing div' , ()=>{
            expect(container.find('div').length).toBeGreaterThanOrEqual(1)
        })
        // it('checking timer component' , ()=>{
        //     expect(container.containsMatchingElement(<Timer/>).toEqual(true))
        // })
   
       
    })