import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const { devicesMap } = require('puppeteer/lib/cjs/common/DeviceDescriptors');
const iPhone = devicesMap['iPhone 6'];

function customizePage(page: any) {
  return page.emulate(iPhone);
}

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    customizePage,
  }),
});
