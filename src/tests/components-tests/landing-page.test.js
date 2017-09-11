import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { LandingPage } from '../../components/landing-page';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow( <LandingPage /> );
    });

    // it("contains spec with an expectation", () => {
    //     expect(shallow( <LandingPage /> ).is('#myFooter')).to.equal(true);
    // });

});