// function that takes in an array and an id, loops through the array, and returns the array item with the matching id that we passed in

export function findById(array, id) {
    let foundArrayItem;
    // loops through the cart array
    for (let i = 0; i < array.length; i++) {
        const arrayItem = array[i];
        // returns first item that has an .id property that matches the passed in id.
        if (arrayItem.id === id) {
            foundArrayItem = arrayItem;
        }
    }
    return foundArrayItem;
}