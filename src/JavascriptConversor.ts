'use strict';

import TextConversor from "./TextConversor";

export default class HtmlConversor extends TextConversor {
    convert(input: string): string {
        let newString: string;
        let cleanString: Array<string> = this.scapeAndSplitInput(input);

        return newString = cleanString
            .reduce((previousLine: string, currentLine: string, index: number, array: Array<string>) => {
                return this.processLines(currentLine, previousLine, index, array.length);
            }, "");
    }

    private processLines(currentLine: string, previousLine: string, index: number, stringLength: number) {
        if (index === 0 && stringLength === 1) {
            return "'" + currentLine.trim() + "'";
        }

        if (index === 0 && stringLength > 1) {
            return "'" + currentLine.trim() + "'+\n";
        }

        if (index === stringLength - 1) {
            return previousLine + "'" + currentLine.trim() + "'";
        } else {
            return previousLine + "'" + currentLine.trim() + "'+\n";
        }
    }
}