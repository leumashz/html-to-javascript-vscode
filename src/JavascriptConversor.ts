'use strict';

import TextConversor from "./TextConversor";

export default class HtmlConversor extends TextConversor {
    convert(input: string): string {
        let newString: string;
        let cleanString: Array<string> = this.scapeAndSplitInput(input);

        return newString = cleanString
            .reduce((previousLine: string, currentLine: string, index: number, array: Array<string>) => {
                return index === 0 ? "'" + currentLine.trim() + "'\n" :
                    index === (array.length - 1) ?
                        previousLine + "'" + currentLine.trim() + "'" :
                        previousLine + "'" + currentLine.trim() + "'+ \n";
            }, "");
    }
}