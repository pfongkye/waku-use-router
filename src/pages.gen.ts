import type { PathsForPages, GetConfigResponse } from 'waku/router';

import type { getConfig as About_getConfig } from './pages/about';

type Page = {
  DO_NOT_USE_pages:| ({path: '/about'} & GetConfigResponse<typeof About_getConfig>)
| {path: '/'; render: 'dynamic'}
};

  declare module 'waku/router' {
    interface RouteConfig {
      paths: PathsForPages<Page>;
    }
    interface CreatePagesConfig {
      pages: Page;
    }
  }
  