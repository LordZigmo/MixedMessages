const generateRandGreeting = () => {
    const randGreeting = Math.floor(Math.random()*6);
    if (randGreeting == 0){
        console.log('“You could leave life right now. Let that determine what you do and say and think.” – Marcus Aurelius');
    } else if (randGreeting == 1) {
        console.log('“If a man knows not which port he sails, no wind is favorable.” – Seneca');
    } else if (randGreeting == 2) {
        console.log('“What really frightens and dismays us is not external events themselves, \nbut the way in which we think about them. It is not things that disturb us, \nbut our interpretation of their significance." ― Epictetus');
    } else if (randGreeting == 3) {
        console.log('“What\'s meant to be will always find a way” ― Trisha Yearwood');
    } else if (randGreeting == 4) {
        console.log("“Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.” ― Maya Angelou");
    } else if (randGreeting == 5) {
        console.log("“Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.” ― Roy T. Bennett")
    }
}

generateRandGreeting();