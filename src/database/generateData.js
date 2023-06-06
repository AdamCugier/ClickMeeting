const {faker} = require('@faker-js/faker');

//CONFIG
const count = 12000;
const defaultUser = [
    {
        "id": 1,
        "name": "ClickMeeting",
        "login": "click_user",
        "password": "qwerty"
    }
]

function createRandomMessage() {
    return {
        id: faker.string.uuid(),
        title: faker.word.words({count: {min: 2, max: 5}}),
        date: faker.date.between({from: '2023-01-01T00:00:00.000Z', to: '2023-06-01T00:00:00.000Z'}),
        sender: faker.person.fullName(),
        email: faker.internet.email(),
        message: faker.lorem.paragraphs({min: 3, max: 10})
    }
}

function generateMessages(count) {
    const messages = []
    for (i = 0; i < count; i++) {
        messages.push(createRandomMessage())
    }
    return messages
}

function randomData() {
    console.log('Starting generate messages')
    const generatedMessages = generateMessages(count);
    console.log(`Generated ${count} messages`)
    return {
        "messages": generatedMessages,
        "users": defaultUser
    }
}

module.exports = randomData