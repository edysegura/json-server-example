const pad = require("pad")
const faker = require("faker")

faker.locale = "pt_BR"

function getRandomGrade() {
    return Math.floor(Math.random() * 100 + 1)
}

module.exports = () => {
    const data = { students: [] }
    // Create 100 students
    for (let studentNumber = 1; studentNumber <= 100; studentNumber++) {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const year = 2017

        data.students.push({
            id: year + pad(3, studentNumber, "0"),
            name: faker.name.findName(firstName, lastName),
            email: faker.internet.email(firstName, lastName).toLowerCase(),
            photo: faker.image.people(128, 128),
            grades: [
                getRandomGrade(),
                getRandomGrade(),
                getRandomGrade(),
                getRandomGrade()
            ]
        })
    }
    return data
}