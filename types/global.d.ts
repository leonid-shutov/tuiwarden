import * as _blessed from 'blessed';

import * as _timers from 'node:timers';
import * as _events from 'node:events';

declare global {
  const blessed: typeof _blessed;

  namespace node {
    const timers: typeof _timers;
    const events: typeof _events;
  }
}
