"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var giftsExchanger_1 = require("./src/common/giftsExchanger");
var CSVReader_1 = require("./src/common/CSVReader");
var criteria_1 = require("./src/common/criteria");
console.log('- Start -');
var filename = process.argv[2];
if (filename) {
    console.log("File to process : " + filename);
    var csvReader = new CSVReader_1.CSVReader(filename);
    csvReader.read()
        .then(function (data) {
        if (data.length > 1) {
            var exchanger = new giftsExchanger_1.GiftsExchanger(data, [
                criteria_1.NotMyself,
                criteria_1.NotSameGroup,
                criteria_1.NotGiveToOldIfNew,
                criteria_1.NotGiveToNewIfOld
            ]);
            exchanger.run();
            exchanger.display();
            console.log('- END -');
        }
    });
}
else {
    console.log('Please give a file path');
    console.log('- END -');
}
//# sourceMappingURL=index.js.map