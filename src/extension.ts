import * as vscode from 'vscode';
import { execCommand } from './exec_command';
import { findFiles } from './find_files';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('exec-command.execute', execCommand)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('exec-command.findFiles', findFiles)
	);
}

export function deactivate() {}
