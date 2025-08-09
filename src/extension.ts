import * as vscode from 'vscode';
import { execCommand } from './exec_command';
import { findFilesFd } from './find_files';


export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('exec-command.execute', execCommand)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('myFindFiles', findFilesFd)
	);
}

export function deactivate() {}
