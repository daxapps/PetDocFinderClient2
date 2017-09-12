import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { VetList } from '../../components/vet-list';

describe('<VetList />', () => {
    it('Renders without crashing', () => {
        shallow( <VetList /> );
    });

    it("contains spec with an expectation", () => {
        expect(shallow( <VetList /> ).is('#panel')).to.equal(true);
    });
});