# vscode-extension-exec-command

## Features

* Run shell command
* Use text editor selection as stdin for shell command


## Extension Settings

This extension contributes the following settings:

* `exec-command.command`: Specifies the command to run.
* `exec-command.useSelectionAsStdin`: Use text editor selection as stdin for command.


## Package the Extension

1. Package into a `.vsix` file using the vsce tool:
   1. `npm install -g @vscode/vsce`
   2. `cd vscode-extension-exec-command`
   3. `vsce package` This command will create a `.vsix` file in your extension's root directory
2. To install the `.vsix` file in your VS Code:
   1. Go to the Extensions view,
   2. Click on Views and More Actions...
   3. Select Install from VSIX...
4. Alternatively, you can use the command line:
   1. code --install-extension exec-command-0.0.1.vsix
