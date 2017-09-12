import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { Vet } from '../../components/vet';

describe('<Vet />', () => {
	const servicesVar = {id: 0, name: 'Service'}
  it('Renders without crashing', () => {
    shallow( <Vet services={servicesVar} /> );
  });

  it("contains spec with an expectation", () => {
		expect(shallow( <Vet services={servicesVar} /> ).is('.vet')).to.equal(true);
   });
});