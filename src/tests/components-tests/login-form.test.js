import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { LoginForm } from '../../components/login-form';

describe('<LoginForm />', () => {
	const handleFnc = () =>{};
  it('Renders without crashing', () => {
      shallow( <LoginForm handleSubmit={handleFnc} /> );
  });

  it("contains spec with an expectation", () => {
  	expect(shallow( <LoginForm handleSubmit={handleFnc} /> ).is('.login-form')).to.equal(true);
  });
});
