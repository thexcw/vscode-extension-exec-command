import * as vscode from 'vscode';
import { exec } from 'child_process';

export async function findFiles(): Promise<Promise<Promise<void>>> {
    const files = await vscode.workspace.findFiles('**/*');
    const items = files.map(f => f.fsPath);
    const selected = await vscode.window.showQuickPick(items, {
      placeHolder: 'Type to search for files'
    });
    if (selected) {
      const doc = await vscode.workspace.openTextDocument(selected);
      vscode.window.showTextDocument(doc);
    }
}

export async function findFilesFd() {
    vscode.window.withProgress({ location: vscode.ProgressLocation.Window, title: 'Searching files...' }, async () => {
        exec('fd --type f', { cwd: vscode.workspace.rootPath }, (err, stdout) => {
            if (err) {
                vscode.window.showErrorMessage('fd not found or error running fd');
                return;
            }
            const files = stdout.split('\n').filter(Boolean);
            vscode.window.showQuickPick(files, { placeHolder: 'Fuzzy search files (fd)' }).then(selected => {
                if (selected) {
                    vscode.workspace.openTextDocument(selected).then(doc => vscode.window.showTextDocument(doc));
                }
            });
        });
    });
}
