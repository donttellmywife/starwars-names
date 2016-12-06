import uniqueRandomArray from 'unique-random-array';
import starwarsNames from './names.json';

var getRandomItem = uniqueRandomArray(starwarsNames);

module.exports = {
    all: starwarsNames,
    random: random
}


function random (number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}
