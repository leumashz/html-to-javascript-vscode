'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerTextEditorCommand('extension.convertHTMLtoString', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No html selected');
            return;
        }

        let selection = editor.selection;
        let range = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
        let text = editor.document.getText(selection);
        var newString: any;
        let scapedString: string = text
            .replace(/'/g, "\\'");

        newString = scapedString.toString().split("\n");
        vscode.debug.activeDebugConsole.appendLine(newString);

        newString = newString
            .reduce((previousLine: string, currentLine: string, index: number, array: [any]) => {
                return index === 0 ? "'" + currentLine.trim() + "'\n" :
                    index === (array.length - 1) ?
                        previousLine + "'" + currentLine.trim() + "'" :
                        previousLine + "'" + currentLine.trim() + "'+ \n";
            }, "");


        editor.edit(function (editBuilder: vscode.TextEditorEdit) {
            editBuilder.replace(range, newString);
        }, );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}