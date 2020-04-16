export default function makeUser(_formData) {
    const name = _formData.get('name');
    const userClass = _formData.get('class');

    const userObject = {
        name: name,
        userClass: userClass,
        completed: {},
        HP: 20,
        gold: 0
    };
    return userObject;
}
