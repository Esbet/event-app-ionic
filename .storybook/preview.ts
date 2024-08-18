import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { initialize } from './msw/initialize.browser';
import { handlers } from '../src/mocks/handlers';
setCompodocJson(docJson);

initialize({
  serviceWorker: {
    url: 'mockServiceWorker.js',
  },
  
  onUnhandledRequest: 'bypass',
}, handlers);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
