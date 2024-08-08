import * as vscode from 'vscode';
import { execCommand } from './exec_command';


export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('exec-command.execute', execCommand);
	context.subscriptions.push(disposable);
}

export function deactivate() {}
