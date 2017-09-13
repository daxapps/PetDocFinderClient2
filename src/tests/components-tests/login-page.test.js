import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { LoginPage } from '../../components/login-page';

describe('<LoginPage />', () => {
    it('Renders without crashing', () => {
        shallow( <LoginPage /> );
    });

    // it("contains spec with an expectation", () => {
    //     expect(shallow( <LoginPage /> ).is('.navbar')).to.equal(true);
    // });
});