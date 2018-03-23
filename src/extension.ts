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
        let stringWithScapeApostrophes: string = text
            .replace(/'/g, "\\'");

        newString = stringWithScapeApostrophes.toString().split("\n");

        newString = newString
            .map((line: string, index: number, array: [any]) => {
                return "'" + line + "'" + (index === (array.length - 1) ? " \n" : " + \n");
            })
            .reduce((previousLine: string, currentLine: string) => { return previousLine + currentLine; }, "");
            
        editor.edit(function (editBuilder: vscode.TextEditorEdit) {
            editBuilder.replace(range, newString);
        }, );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}