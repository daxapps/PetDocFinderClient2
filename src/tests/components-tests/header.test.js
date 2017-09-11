import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Header from '../../components/header';
// import Banner from "../../components/banner.jpg";

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow( <Header /> );
    });

    // it("contains spec with an expectation", () => {
    //     expect(shallow( <Header /> ).contains('<img src={Banner} />')).to.equal(true);
    // });

});