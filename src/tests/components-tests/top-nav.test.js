import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import TopNav from '../../components/top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow( <TopNav /> );
    });

    it("contains spec with an expectation", () => {
        expect(shallow( <TopNav / > ).is('.navbar')).to.equal(true);
    });

});