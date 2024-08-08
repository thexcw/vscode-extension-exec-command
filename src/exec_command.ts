import { spawn } from 'child_process';
import * as vscode from 'vscode';


export function execCommand(): void {
    const cfg = vscode.workspace.getConfiguration('exec-command');
    const command: string | undefined = cfg.get('command');
    if (!command) {
        vscode.window.showErrorMessage('command is not specified');
        return;
    }

    const cmd = spawn(command, { shell: true });

    const selection_as_stdin: boolean | undefined = cfg.get('useSelectionAsStdin');
    if (selection_as_stdin) {
        const activeTextEditor = vscode.window.activeTextEditor;
        if (!activeTextEditor) {
            vscode.window.showErrorMessage('can\'t run a command with selection as stdin without active text editor');
            return;
        }
        const selection = activeTextEditor.document.getText(activeTextEditor.selection);
        cmd.stdin.write(selection);
        cmd.stdin.end();
    }

    cmd.stdout.on('data', (data) => {
        vscode.window.showInformationMessage(`stdout: ${data}`);
    });
    cmd.stderr.on('data', (data) => {
        vscode.window.showErrorMessage(`stderr: ${data}`);
    });
    cmd.on('error', (err: Error) => {
        vscode.window.showErrorMessage(`error: ${err.message}`);
    });
    cmd.on('close', (code) => {
        if (code !== 0) {
            vscode.window.showInformationMessage(`command exited with code: ${code}`);
        }
    });
}
