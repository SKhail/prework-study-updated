
let topics =
 ["HTML",
  "CSS",
  "Git",
  "JavaScript"];

let randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {


 for (let i = 0; i < topics.length; i++) {
  console.log(topics[i]);
 }
};

function selectTopic() {
 if (topics[0] === 'HTML') {
  console.log("Let's study HTML!");
 } else if (topics[0] === 'CSS') {
  console.log("Let's study CSS!");
 } else if (topics[0] === 'Git') {
  console.log("Let's study Git!");
 } else if (topics[0] === 'JavaScript') {
  console.log("Let's study JavaScript!");
 } else {
  console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();











