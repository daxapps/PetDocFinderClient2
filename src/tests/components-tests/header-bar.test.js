import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { HeaderBar } from '../../components/header-bar';

describe('<HeaderBar />', () => {
    it('Renders without crashing', () => {
        shallow( <HeaderBar /> );
    });

    it("contains spec with an expectation", () => {
        expect(shallow( <HeaderBar /> ).is('.navbar')).to.equal(true);
    });
});