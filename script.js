const facts = [
    "At 20 years old, I've already hiked several mountain trails and plan to conquer many more.",
    "I find peace and inspiration in the mountains, making them my favorite getaway.",
    "I've celebrated my 20th birthday with a breathtaking view from a mountain peak.",
    "The mountains are my second home, and I aim to explore all major ranges by the time I'm 30.",
    "Being 20, I have a lifetime ahead to explore the majestic beauty of mountains around the world."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
