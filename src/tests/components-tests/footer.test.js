import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Footer from '../../components/footer';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow( <Footer /> );
    });

    it("contains spec with an expectation", () => {
        expect(shallow( <Footer /> ).is('#myFooter')).to.equal(true);
    });

});