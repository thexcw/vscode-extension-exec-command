import * as vscode from 'vscode';

export async function findFiles() {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders || folders.length === 0) {
        vscode.window.showErrorMessage('Нет открытых папок для поиска.');
        return;
    }
    const root_folders = folders.map(folder => folder.uri.fsPath);
    showFzfTerminal(root_folders);
}

function showFzfTerminal(root_folders: string[]): vscode.Terminal {
    const name = 'Find files';
    const cmd = [
        'fdfind',
        '--type', 'f',
        '--hidden',
        '--follow',
        '--exclude', '.git',
        '.',
        ...root_folders.map(folder => `"${folder}"`),
        '| fzf',
        '| xargs -r code',
        '; exit'
    ].join(' ');
    const term = vscode.window.createTerminal({
        name: name,
        location: vscode.TerminalLocation.Editor,
    });
	term.show();
    term.sendText(cmd, true);
	return term;
}
