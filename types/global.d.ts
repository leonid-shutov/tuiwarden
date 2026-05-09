import * as opentui from '@opentui/core';

import * as _timers from 'node:timers';
import * as _events from 'node:events';

declare global {
  const tui: typeof opentui;

  namespace node {
    const timers: typeof _timers;
    const events: typeof _events;
  }
}
