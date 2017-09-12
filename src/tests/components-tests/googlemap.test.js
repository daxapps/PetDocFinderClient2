import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { GoogleMap } from '../../components/googlemap';

describe('<GoogleMap />', () => {
    it('Renders without crashing', () => {
        shallow( <GoogleMap / > );
    });
});