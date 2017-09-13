import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { RegistrationForm } from '../../components/registration-form';

describe('<RegistrationForm />', () => {
	const handleFnc = () =>{};
  it('Renders without crashing', () => {
    shallow( <RegistrationForm handleSubmit={handleFnc} /> );
  });

  it("contains spec with an expectation", () => {
    expect(shallow( <RegistrationForm handleSubmit={handleFnc}  /> ).is('.login-form')).to.equal(true);
  });
});