import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { Service } from '../../components/services';

describe('<Service />', () => {
    it('Renders without crashing', () => {
        shallow( <Service /> );
    });

    // it("contains spec with an expectation", () => {
    //     expect(shallow( <Service /> ).is('.service')).to.equal(true);
    // });
});