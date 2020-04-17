// IMPORT MODULES under test here:
import makeUser from '../make-user.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('makes a user object in js from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'rachel');
    formData.set('class', 'elf');

    const expected = {
        name: 'rachel',
        userClass: 'elf',
        completed: {},
        hp: 20,
        gold: 0
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const userObject = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, userObject);
});
