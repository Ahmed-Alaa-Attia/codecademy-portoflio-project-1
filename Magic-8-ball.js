const responses = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "Outlook not so good",
    "Definitely",
    "Cannot predict now",
    "It is certain",
    "Most likely",
    "Reply hazy, try again"
];

const shakeMagicBall = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
};

const name = "Your Name"; // Replace with your name
const question = "Will I have a great day tomorrow?"; // Replace with your question
const response = shakeMagicBall();

console.log(`Hello ${name}, your question is: ${question}`);
console.log(`Magic 8-Ball says: ${response}`);
