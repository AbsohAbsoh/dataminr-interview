import React from 'react';
import Dashboard from '../dashboard';
import {render, RenderAPI} from '@testing-library/react-native';
import {dashboardTags} from '../dashboard.tags';

describe('Screen -- Dashboard', () => {
  let rendered: RenderAPI;
  beforeEach(() => {
    // @ts-ignore -- missing navigation dependency
    rendered = render(<Dashboard />);
  });

  it('Should render the dashboard and match the snapshot', () => {
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('OK button should be found in render', async () => {
    const button = rendered.getByTestId(dashboardTags.demoButton);
    expect(button).toBeTruthy();
  });
});
