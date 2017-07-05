import { GiftsExchanger } from './src/common/GiftsExchanger';
import { CSVReader } from './src/common/CSVReader';
import {
    NotMyself,
    NotSameGroup,
    NotGiveToOldIfNew,
    NotGiveToNewIfOld
} from './src/common/Criteria';

console.log('- Start -');
const filename = process.argv[2];
if (filename) {
    console.log(`File to process : ${filename}`);


    const csvReader = new CSVReader(filename);

    csvReader.read()
        .then(data => {
            if (data.length > 1) {
                const exchanger = new GiftsExchanger(
                    data,
                    [
                        NotMyself,
                        NotSameGroup,
                        NotGiveToOldIfNew,
                        NotGiveToNewIfOld
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

