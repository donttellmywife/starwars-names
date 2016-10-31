var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function () {
    describe('all', function () {
        it('should be array of strings', function () {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(arr) {
                return arr.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });


        it('should contain "Luke SKylwalker"', function () {
            expect(starWars.all).to.include('Luke Skywalker');
        });
    })


    describe('random', function () {
        it('should be a random item from starWars.all', function () {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        })
    });
})
