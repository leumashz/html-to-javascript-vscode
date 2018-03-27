import * as assert from 'assert';
import JavascriptConversor from '../JavascriptConversor';

suite("Extension Tests", function () {

    // Defines a Mocha unit test
    test("convert html with one line", function () {
        var html = "<html></html>";
        var jsTool = new JavascriptConversor();
        var resultString = jsTool.convert(html);
        var expectedString = "'<html></html>'";
        assert.strictEqual(resultString, expectedString);
    });

    // test("convert html multiline", function() {
    //     var html = "<html>\n</html>\n<html>";
    //     var jsTool = new JavascriptConversor();
    //     var resultString = jsTool.convert(html);
    //     var expectedString = "'<html>\n</html>\n<html>'";
    //     assert.strictEqual(resultString, expectedString);
    // });
});