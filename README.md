# vscode-extension-exec-command

## Features

* Run shell command
* Use text editor selection as stdin for shell command


## Extension Settings

This extension contributes the following settings:

* `exec-command.command`: Specifies the command to run.
* `exec-command.useSelectionAsStdin`: Use text editor selection as stdin for command.


## Package

Package into a `.vsix` file using the vsce tool:
```bash
npm install -g @vscode/vsce
cd vscode-extension-exec-command
vsce package
```
This command will create a `.vsix` file in your extension's root directory

## Install

To install the `.vsix` file in your VS Code go to the Extensions view -> More Actions -> Install from VSIX

Alternatively, you can use the command line:
```bash
code --install-extension exec-command-0.0.1.vsix
```
