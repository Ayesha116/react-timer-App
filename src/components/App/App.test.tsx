import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';



describe('rendering app componet' , ()=>{
    let container:any
    beforeEach(()=>(
        container = shallow(<App/>)))
        it('testing div' , ()=>{
            expect(container.find('div').length).toEqual(1)
        })
        // it('checking timer component' , ()=>{
        //     expect(container.containsMatchingElement(<Timer/>).toEqual(true))
        // })
   
       
    })