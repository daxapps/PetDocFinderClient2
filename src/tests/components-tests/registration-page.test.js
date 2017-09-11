import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { RegistrationPage } from '../../components/registration-page';

describe('<RegistrationPage />', () => {
    it('Renders without crashing', () => {
        shallow( <RegistrationPage /> );
    });

    // it("contains spec with an expectation", () => {
    //     expect(shallow( <LoginPage /> ).is('.navbar')).to.equal(true);
    // });
});