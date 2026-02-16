const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const modal = document.getElementById('game-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-modal');
const gameContainer = document.querySelector('.game-container');

const playerImage = new Image();
playerImage.src = 'img/logo.png';

const bgMusic = new Audio('music/game-music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;

const sfxOpen = new Audio('music/open-sound.mp3');
const sfxClose = new Audio('music/close-sound.mp3');
const sfxSecret = new Audio('music/open-sound.mp3');

const player = {
    x: 0,
    y: 0,
    w: 40,
    h: 40,
    speed: 5,
    dx: 0,
    dy: 0,
    isLoaded: false
};

playerImage.onload = () => {
    player.isLoaded = true;
};

const zones = [
    {
        id: 'dev',
        type: 'info',
        color: '#ffcc00',
        title: "Dev Web",
        desc: "Étudiant en 2ème année à DECODE Paris. HTML, CSS, JS, PHP, Bootstrap, React.js, Symfony & Wordpress.",
        visited: false
    },
    {
        id: 'music',
        type: 'info',
        color: '#ff5757',
        title: "Musique",
        desc: "Compositeur de musiques de jeux (rétro, rock, métal, jazz, électro) pour créer des univers web uniques.",
        visited: false
    },
    {
        id: 'exp',
        type: 'info',
        color: '#66ff66',
        title: "Expérience",
        desc: "Assistant dév chez Onepoint et assistant chef de projet chez SFR.",
        visited: false
    },
    {
        id: 'contact',
        type: 'info',
        color: '#bd57ff',
        title: "Contact",
        desc: "Disponible pour des projets freelance en dev web & composition musicale. N'hésitez pas à me contacter !",
        visited: false
    },
    {
        id: 'cv_secret',
        type: 'link',
        url: '/pdf/cv.pdf',
        color: 'rgba(255, 255, 255, 0.03)',
        visited: false
    }
];

let isModalOpen = false;
let musicStarted = false;

function resizeGame() {
    canvas.width = gameContainer.clientWidth;
    canvas.height = gameContainer.clientHeight;

    const pad = 20;
    const boxSize = 50;

    player.x = (canvas.width / 2) - (player.w / 2);
    player.y = (canvas.height / 2) - (player.h / 2);

    zones[0].x = canvas.width * 0.15; zones[0].y = canvas.height * 0.15;
    zones[0].w = boxSize; zones[0].h = boxSize;

    zones[1].x = canvas.width * 0.85 - boxSize; zones[1].y = canvas.height * 0.15;
    zones[1].w = boxSize; zones[1].h = boxSize;

    zones[2].x = canvas.width * 0.15; zones[2].y = canvas.height * 0.85 - boxSize;
    zones[2].w = boxSize; zones[2].h = boxSize;

    zones[3].x = canvas.width * 0.85 - boxSize; zones[3].y = canvas.height * 0.85 - boxSize;
    zones[3].w = boxSize; zones[3].h = boxSize;

    zones[4].x = canvas.width - 60;
    zones[4].y = 10;
    zones[4].w = 50;
    zones[4].h = 50;
}

window.addEventListener('resize', resizeGame);
resizeGame();

// --- INPUTS ---
const input = { active: false, x: 0, y: 0 };

function getEventPos(e) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX; clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX; clientY = e.clientY;
    }
    return { x: clientX - rect.left, y: clientY - rect.top };
}

function startInput(e) {
    if (isModalOpen) return;
    if (!musicStarted) { bgMusic.play().catch(() => { }); musicStarted = true; }
    input.active = true;
    const pos = getEventPos(e);
    input.x = pos.x; input.y = pos.y;
}

function moveInput(e) {
    if (input.active) {
        if (e.cancelable) e.preventDefault();
        const pos = getEventPos(e);
        input.x = pos.x; input.y = pos.y;
    }
}

function endInput() { input.active = false; player.dx = 0; player.dy = 0; }

canvas.addEventListener('mousedown', startInput);
canvas.addEventListener('mousemove', moveInput);
canvas.addEventListener('mouseup', endInput);
canvas.addEventListener('mouseleave', endInput);
canvas.addEventListener('touchstart', startInput, { passive: false });
canvas.addEventListener('touchmove', moveInput, { passive: false });
canvas.addEventListener('touchend', endInput);

const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false, z: false, s: false, q: false, d: false };
document.addEventListener('keydown', (e) => {
    if (!musicStarted) { bgMusic.play().catch(() => { }); musicStarted = true; }
    if (isModalOpen) { if (e.code === 'Space' || e.code === 'Escape') closeModal(); return; }
    if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});
document.addEventListener('keyup', (e) => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; });
closeBtn.addEventListener('click', closeModal);

function openModal(zone) {
    isModalOpen = true;
    input.active = false;
    player.dx = 0; player.dy = 0;
    zone.visited = true;
    sfxOpen.currentTime = 0; sfxOpen.play();
    modalTitle.textContent = zone.title;
    modalDesc.textContent = zone.desc;
    modal.classList.remove('hidden');
}

function openLink(zone) {
    sfxSecret.currentTime = 0; sfxSecret.play();

    window.open(zone.url, '_blank');

    player.x = (canvas.width / 2) - (player.w / 2);
    player.y = (canvas.height / 2) - (player.h / 2);
    player.dx = 0; player.dy = 0;
    input.active = false;
}

function closeModal() {
    sfxClose.currentTime = 0; sfxClose.play();
    isModalOpen = false;
    modal.classList.add('hidden');
    player.x = (canvas.width / 2) - (player.w / 2);
    player.y = (canvas.height / 2) - (player.h / 2);
}

function checkCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y
    );
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    zones.forEach(zone => {
        if (zone.type === 'link') {
            ctx.fillStyle = zone.color;
            ctx.fillRect(zone.x, zone.y, zone.w, zone.h);

            ctx.strokeStyle = "rgba(255,255,255,0.1)";
            ctx.strokeRect(zone.x, zone.y, zone.w, zone.h);
        }
        else {
            ctx.fillStyle = zone.color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = zone.color;
            ctx.fillRect(zone.x, zone.y, zone.w, zone.h);
            ctx.shadowBlur = 0;

            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.font = "bold 14px Arial";

            if (zone.visited) {
                ctx.fillText(zone.title, zone.x + (zone.w / 2), zone.y - 10);
            } else {
                ctx.font = "20px Arial";
                ctx.fillText("?", zone.x + (zone.w / 2), zone.y - 10);
            }
        }
    });

    if (!isModalOpen) {
        player.dx = 0; player.dy = 0;

        if (input.active) {
            const centerX = player.x + player.w / 2;
            const centerY = player.y + player.h / 2;
            const diffX = input.x - centerX;
            const diffY = input.y - centerY;
            const dist = Math.sqrt(diffX * diffX + diffY * diffY);

            if (dist > 5) {
                const angle = Math.atan2(diffY, diffX);
                player.dx = Math.cos(angle) * player.speed;
                player.dy = Math.sin(angle) * player.speed;
            }
        } else {
            if (keys.ArrowRight || keys.d) player.dx = player.speed;
            if (keys.ArrowLeft || keys.q) player.dx = -player.speed;
            if (keys.ArrowUp || keys.z) player.dy = -player.speed;
            if (keys.ArrowDown || keys.s) player.dy = player.speed;
        }

        player.x += player.dx;
        player.y += player.dy;

        if (player.x < 0) player.x = 0;
        if (player.x + player.w > canvas.width) player.x = canvas.width - player.w;
        if (player.y < 0) player.y = 0;
        if (player.y + player.h > canvas.height) player.y = canvas.height - player.h;
    }

    if (player.isLoaded) {
        ctx.shadowBlur = 15; ctx.shadowColor = '#57e6ff';
        ctx.drawImage(playerImage, player.x, player.y, player.w, player.h);
        ctx.shadowBlur = 0;
    } else {
        ctx.fillStyle = '#57e6ff'; ctx.fillRect(player.x, player.y, player.w, player.h);
    }

    zones.forEach(zone => {
        if (checkCollision(player, zone) && !isModalOpen) {
            if (zone.type === 'link') {
                openLink(zone);
            }
            else {
                openModal(zone);
            }
        }
    });

    requestAnimationFrame(update);
}

window.addEventListener('keydown', function(e) {
    // Liste des touches à bloquer (Espace, Flèche Haut, Flèche Bas)
    const keysToBlock = ['Space', 'ArrowUp', 'ArrowDown'];

    if (keysToBlock.includes(e.code)) {
        // Empêche le défilement uniquement si on n'est pas dans un champ de texte
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    }
}, false);

update();

