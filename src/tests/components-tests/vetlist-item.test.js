import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { VetListItem } from '../../components/vetlist-item';

describe('<VetListItem />', () => {
    it('Renders without crashing', () => {
        shallow( <VetListItem /> );
    });

    // it("contains spec with an expectation", () => {
    //     expect(shallow( <VetListItem /> ).is('.vet-rating')).to.equal(true);
    // });
});