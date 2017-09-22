import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import TopNav from '../../components/top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow( <TopNav /> );
    });

});