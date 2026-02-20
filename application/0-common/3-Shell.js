const { child_process: cp } = node;

({
  exec: (command, args, options) => {
    let resolved = false;
    const { promise, resolve, reject } = Promise.withResolvers();

    const p = cp.spawn(command, args);

    p.on('error', reject);

    const buffers = [];
    p.stdout.on('data', (buffer) => buffers.push(buffer));

    if (options?.input !== undefined) {
      p.stdin.write(options.input);
      p.stdin.end();
    }

    p.on('close', (code) => {
      if (code === 0 && !resolved) {
        resolved = true;
        resolve(Buffer.concat(buffers).toString().trim());
      } else reject();
    });

    if (options?.timeout !== undefined) {
      node.timers.setTimeout(() => {
        p.kill('SIGKILL');
        if (!resolved) resolve();
      }, options.timeout);
    }

    return promise;
  },
});
