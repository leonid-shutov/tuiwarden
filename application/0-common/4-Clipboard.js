const { os } = node;

({
  write(text) {
    const platform = os.platform();

    if (platform === 'darwin') return Shell.exec('pbcopy', [], { input: text });
    if (platform === 'win32') return Shell.exec('clip', [], { input: text });

    if (platform === 'linux') {
      if (process.env.WAYLAND_DISPLAY) return Shell.exec('wl-copy', [text], { timeout: 500 });
      return Shell.exec('xclip', ['-selection', 'clipboard'], { input: text });
    }

    throw new Error('Unsupported platform');
  },

  read() {
    const platform = os.platform();

    if (platform === 'darwin') return Shell.exec('pbpaste');
    if (platform === 'win32') return Shell.exec('powershell.exe', ['-Command', 'Get-Clipboard']);

    if (platform === 'linux') {
      if (process.env.WAYLAND_DISPLAY) return Shell.exec('wl-paste');
      return Shell.exec('xclip', ['-selection', 'clipboard', '-o']);
    }

    throw new Error('Unsupported platform');
  },

  clear() {
    const platform = os.platform();

    if (platform === 'linux') {
      if (process.env.WAYLAND_DISPLAY) return Shell.exec('wl-copy', ['--clear']);
    }

    return self.write('');
  },
});
