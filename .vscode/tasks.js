{
    // start bash, not the mintty, or you'll get a new window
    "terminal.integrated.shell.windows": "C:\\cygwin\\bin\\bash.exe",
    // Use this to keep bash from doing a 'cd ${HOME}'
    "terminal.integrated.env.windows": {
      "CHERE_INVOKING": "1"
    },
    // Make it a login shell
    "terminal.integrated.shellArgs.windows": [
      "-l"
    ],
  }