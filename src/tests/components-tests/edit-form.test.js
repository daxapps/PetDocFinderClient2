import React from 'react';
import { shallow, mount } from 'enzyme';

import { EditForm } from '../../components/edit-form';

describe('<EditForm />', () => {
    it('Renders without crashing', () => {
        shallow( <EditForm / > );
    });
});