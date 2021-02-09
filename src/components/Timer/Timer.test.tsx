import React from 'react';
import { shallow , mount } from 'enzyme';
import Timer from './Timer.component';


describe('rendering app componet', () => {
    let container: any
    beforeEach(() => (
        container = shallow(<Timer />)))
    it('testing div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })
    it('checking timer component', () => {
        expect(container.find('Timerbutton').length).toEqual(3)
    })


})

describe('mount timer', () => {
    let component: any
    beforeEach(() => (component = mount(<Timer />)))
    it('start timer', () => {
        component.find('.start-timer').first().simulate('click')
    })
    it('checking timer component', () => {
        component.find('.stop-timer').first().simulate('click')
    })
    it('checking timer component', () => {
        component.find('.reset-timer').first().simulate('click')
    })
})