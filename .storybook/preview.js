import { addParameters } from '@storybook/client-api';
import {
  INITIAL_VIEWPORTS,
  // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    },
    // viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'iphone6',
  },
});