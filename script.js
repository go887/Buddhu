const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    document.getElementById('question').innerHTML = "I knew it! Besties forever! 💖";
    document.getElementById('display-img').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/L4lvBpHW2rlS8D5pTG/giphy.gif";
});
