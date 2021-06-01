
// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create a class called "Component". The constructor for Component should take in one parameter "name". There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.

class Component {
    constructor(name) {
this.name=name
    }
    render() {
        console.log("Component is rendering information on ", this.name)
    }
}

// 2. Create a child class called UserCard that extends Component. The UserCard should take in only one constructor parameter called "user". Expect the user to be an object with "name", "imageUrl" and "email" properties.
class UserCard extends Component {

    constructor(user) {
        super(user)

    }

    render() {   // The UserCard should override the original "render" method.
        console.log(` <div class="card card-user">
            <img class="card-img-top" src="${this.name.imageUrl}" alt>
            <div class="card-body">
                <h5 class="card-title">${this.name.name}</h5>
                <p class="card-text">To contact, please send a message to</p>
                <a
                    href="mailto:${this.name.email}"
                    class="btn btn-primary"
                >
                    ${this.name.email}
                </a>
            </div>
     </img></div>`)

    }

}

const childCard = new UserCard({ name: "Martina State", imageUrl: "image1/images/sister-wives.com", email: "market.women@sister-wives.com" })

console.log(childCard)
childCard.render()


// 3. Create an array of at least 5 user objects.
const userObjects = [

    { name: "Andy", imageUrl: "image62images/sister-wives.com", email: "andy-salad@sister-wives.com" },
    { name: "Lucy", imageUrl: "image3/images/sister-wives.com", email: "lucy-sonne@sister-wives.com" },
    { name: "Taurus", imageUrl: "image4/images/sister-wives.com", email: "constellate@sister-wives.com" },
    { name: "Bekang", imageUrl: "image5/images/sister-wives.com", email: "samisola@sister-wives.com" },
    { name: "Salutaris", imageUrl: "image6/images/sister-wives.com", email: "mancho-manchikon@sister-wives.com" },
    { name: "Fatoumata", imageUrl: "image7/images/sister-wives.com", email: "akum-pikin@sister-wives.com" },
]

console.log("=======QUESTION 4 Below====")
// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.

const userCardInstances = userObjects.map(item => new UserCard(item)


)
console.log(userCardInstances)


// 5. Using .forEach(), call the render method of your instances.
userCardInstances.forEach(item => item.render())
// 6. Print the type of the UserCard class.
console.log(typeof UserCard) //returns function

// 7. Print the type of a UserCard instance
console.log(typeof userCardInstances) // returns object