class Passenger {
    constructor(FirstName, LastName, birthday, departureCity, arrivalCity, leavingTime, returningTime, bagsNumber, meal, id) {
        this.FirstName = FirstName,
            this.LastName = LastName,
            this.birthday = birthday,
            this.departureCity = departureCity,
            this.arrivalCity = arrivalCity,
            this.leavingTime = leavingTime,
            this.returningTime = returningTime,
            this.bags = bagsNumber,
            this.meal = meal,
            this.canDrink = checkAge(birthday)
        this.cash = calculate()
        this.id = id
    }
}

let tempBags = 0
function calculate() {
    console.log(tempBags)
    return (300 + (extras.length * 10) + (Number(tempBags) * 20))
}

function checkAge(birthday) {
    birthday = birthday.split("/")

    let now = Date.now()
    let timeConverter = [1000, 60, 60, 24, 365, 366]
    for (let i = 0; i < timeConverter.length; i++) {
        let temp = 0
        if (i < 4) {
            temp = now % timeConverter[i]
            now -= temp
            now = now / timeConverter[i]
        } else {
            let years = 0
            temp = 2
            while (true) {
                if (temp % 4 == 0 && now >= 366) {
                    temp = 1
                    now -= timeConverter[i + 1]
                    years++
                } else if (now >= 365) {
                    now -= timeConverter[i]
                    years++
                } else {
                    now = years + 1970
                    break;
                }
            }
            i++
        }
    }

    if (Number(birthday[2]) <= now - 21) {
        return ("Yes");
    } else {
        return ("No");
    }
}

let extras = []
function extra(choice) {
    let temp = true
    for (let i = 0; i < extras.length; i++) {
        if (choice == extras[i]) {
            extras.splice(i, 1)
            temp = false
        }
    }
    if (temp) {
        extras.push(choice)
    }
}
let meal = ""
let id = 1001
let list = []
let number = 0

function food(choice) {
    meal = choice
}

function submit() {
    let FirstName = document.getElementById("fName").value
    let LastName = document.getElementById("lName").value
    let birthday = document.getElementById("birthday").value
    let departureCity = document.getElementById("departure").value
    let arrivalCity = document.getElementById("arrival").value
    let leavingTime = document.getElementById("leaving").value
    let returningTime = document.getElementById("returning").value
    let bagsNumber = document.getElementById("bags").value

    if (FirstName != "" && LastName != "" && birthday != "" && departureCity != "" && arrivalCity != "" && leavingTime != "" && returningTime != "" && bagsNumber != "" && meal != "") {
        tempBags = bagsNumber
        let passenger = new Passenger(FirstName, LastName, birthday, departureCity, arrivalCity, leavingTime, returningTime, bagsNumber, meal, id)
        list.push(passenger)
        console.log(bagsNumber)
        // document.getElementById("fName").value = ""
        // document.getElementById("lName").value = ""
        // document.getElementById("birthday").value = ""
        // document.getElementById("departure").value = ""
        // document.getElementById("arrival").value = ""
        // document.getElementById("leaving").value = ""
        // document.getElementById("returning").value = ""
        // document.getElementById("bags").value = ""

        id++

        let temp = document.getElementById("search");
        let newName = document.createElement("option");
        newName.id = `${(id - 1002)}`
        newName.text = `${list[number].FirstName} ${list[number].LastName}`
        temp.add(newName)

        number++
    }
}

function print() {
    let select = document.getElementById("search");
    let options = select.options
    let id = options[options.selectedIndex].id

    let printSpace = document.getElementById("printSpace")

    let person = list[id]

    printSpace.innerHTML = ""
    printSpace.innerHTML += `<div>${person.id} ${person.FirstName} ${person.LastName}<br> Birthday : ${person.birthday}<br> Departure City : ${person.departureCity}<br> Arrival City : ${person.arrivalCity}<br> Leaving Time : ${person.leavingTime}<br> Returning Time : ${person.returningTime}<br> Total Bags : ${person.bags}<br> Meal Chosen : ${person.meal}<br> Can Drink : ${person.canDrink}<br> Money Spent : ${person.cash}</div>`
}