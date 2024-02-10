/*
    ATTENTION: all exercises are to be solved with:
    map
    filter
    reduce
    sort
    unless stated you can use a for cycle for some part
*/

/*
1. User Account Management:
Given an array of user objects, each containing a username and age property, 
create a new array containing only the usernames of users who are above 18 years old. 
Then sort the usernames alphabetically.
Input:
    const users = [
        { username: "charlie", age: 17 },
        { username: "bob", age: 30 },
        { username: "diana", age: 20 }
        { username: "alice", age: 25 },
    ];
Expected output:
    ["alice", "bob", "diana"]
*/

const users = [
    { username: "charlie", age: 17 },
    { username: "bob", age: 30 },
    { username: "diana", age: 20 },
    { username: "alice", age: 25 },
];

const filterUsers = users.filter(user => user.age > 18);
    console.log(filterUsers)

const usersAbove18 = filterUsers
    .map(user => user.username)
    .sort();
    console.log(usersAbove18);

/*
2. Message Filtering:
   Given an array of message objects, each containing a sender, recipient, 
   and message property, filter out all messages sent by a particular user (sender). 
   Then, concatenate all the remaining messages into a single string.
Input:
    const messages = [
        { sender: "alice", recipient: "bob", message: "Hello!" },
        { sender: "bob", recipient: "alice", message: "Hi there!" },
        { sender: "bob", recipient: "alice", message: "How are you?" },
        { sender: "alice", recipient: "bob", message: "Yo, you there?" },
    ];

Expected output: 
    getMessagesFromPerson('bob') => "Hi there! How are you?"
*/


/*
3. Product Pricing:
    Given an array of product objects, each containing a name, price, and quantity property, 
    filter out products that are out of stock (quantity is 0) . 
    Then, calculate the total cost of all products (price * quantity)
    and sort the remaining products by total cost in ascending order.
Input: 
    const products = [
        { name: "apple", price: 1.5, quantity: 10 },
        { name: "banana", price: 0.75, quantity: 5 },
        { name: "orange", price: 2, quantity: 0 }
    ];
Expected output: 
    [
        { name: "apple", price: 15, quantity: 10, totalCost: 150 },
        { name: "banana", price: 3.75, quantity: 5, totalCost: 18.75 }
    ]
*/

const products = [
    { name: "apple", price: 1.5, quantity: 10 },
    { name: "banana", price: 0.75, quantity: 5 },
    { name: "orange", price: 2, quantity: 0 }
];

const filterProducts = products.filter(product => product.quantity > 0)
console.log(filterProducts)

const totalCostProducts = filterProducts.map(product => ({...product, totalCost: product.price * product.quantity}))

.sort((a, b) => a.totalCost - b.totalCost);

console.log(totalCostProducts)

/*
4. Employee Salary Calculation:
   Given an array of employee objects, each containing a name, salary, and department 
   property, calculate the total salary of all employees in a specific department. 
   Then, filter out departments whose salary is below a certain threshold, 50000, 
   and sort the remaining departments by total salary in descending order.
Input:
    const employees = [
        { name: "Alice", salary: 50000, department: "HR" },
        { name: "Bob", salary: 60000, department: "IT" },
        { name: "Charlie", salary: 45000, department: "HR" },
        { name: "Dean", salary: 80000, department: "IT" },
        { name: "Earl", salary: 70000, department: "IT" },
        { name: "Fred", salary: 40000, department: "R&D" },
    ];

Expected output:
    [ [ 'IT', 210000 ], [ 'HR', 95000 ] ]
*/


/*
5. Event Attendance Tracking:
    Given an array of event attendance objects, each containing an event, attendees, 
    and date property, filter out all events that had less than 60 attendees (filter out small events). 
    Then, calculate the total number of attendees per event. (You can do this part with a for cycle)
Input:
    const events = [
        { event: "Conference", attendees: 100, date: "2024-02-01" },
        { event: "Workshop", attendees: 50, date: "2024-02-05" },,
        { event: "Seminar", attendees: 80, date: "2024-01-20" },
        { event: "Workshop", attendees: 70, date: "2024-02-01" },
        { event: "Seminar", attendees: 120, date: "2024-01-15" }
    ];

Expected output:
    { Conference: 100, Seminar: 200, Workshop: 70 }

*/


/*
6. Task Management:
    Given an array of task objects, each containing 
    a title, priority, and completed property, filter out all completed tasks. 
    Then, sort them by priority (low to high),
    and map the remaining tasks to an array of strings containing only the titles.
Input:
    const tasks = [
        { title: "Write report", priority: "low", completed: false },
        { title: "Prepare presentation", priority: "medium", completed: true },
        { title: "Schedule meeting", priority: "high", completed: false }
    ];

Expected output:
    ["Write report", "Schedule meeting"]
*/