'use strict';

export default abstract class TextConversor {
    abstract convert(input: string): string;

    scapeAndSplitInput(input: string): Array<string> {
        return input.replace(/'/g, "\\'").split("\n");
    }
}