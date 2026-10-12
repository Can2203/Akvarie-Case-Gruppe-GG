// Hent elementer
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const targetPrompt = document.getElementById('target-prompt');
const successMessage = document.getElementById('success-message');
const hiddenFish = document.getElementById('hidden-fish');
const targetFishImage = document.querySelector('.target-img');
const successFishImage = document.querySelector('.target-img-large');
const scoreLabel = document.createElement('div');
const errorMessage = document.createElement('div');

let score = 0;
let roundTimer = null;


const fishOptions = [
  'Fisk-svg/Antais.svg',
  'Fisk-svg/Hugofisk.svg',
  'Fisk-svg/Ildhalekutling.svg',
  'Fisk-svg/KongeFebars.svg',
  'Fisk-svg/Nemo.svg',
  'Fisk-svg/Palet kirurg.svg',
  'Fisk-svg/Pincetfisk.svg',
  'Fisk-svg/Røgfarvetkirurg.svg'
];

const assetLibrary = [
  'Assets/Property 1=Barnacle1.svg',
  'Assets/Property 1=Barnacle2.svg',
  'Assets/Property 1=DetailStenLille.svg',
  'Assets/Property 1=DetailStenStor.svg',
  'Assets/Property 1=Musling lilla.svg',
  'Assets/Property 1=Musling pink.svg',
  'Assets/Property 1=Sten1.svg',
  'Assets/Property 1=Sten2.svg',
  'Assets/Property 1=tang1.svg',
  'Assets/Property 1=tang2.svg',
  'Assets/Property 1=tang3.svg',
  'Assets/Property 1=TangBrunSten.svg',
  'Assets/Property 1=TangGrønSten.svg',
  'Assets/Property 1=UrchinBrun.svg',
  'Assets/Property 1=UrchinLilla.svg',
  'Assets/Property 1=VandMandGul.svg',
  'Assets/Property 1=VandMandLilla.svg',
  'Assets/Søstjerne.svg'
];

const seaItems = Array.from(document.querySelectorAll('.sea-item'));

function toAssetUrl(path) {
  return path.split('/').map((segment) => encodeURIComponent(segment)).join('/');
}

function shuffleArray(items) {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

setupHud();

function setupHud() {
  scoreLabel.id = 'score-label';
  scoreLabel.textContent = `Score: ${score}`;
  scoreLabel.className = 'score-label';

  errorMessage.id = 'error-message';
  errorMessage.textContent = 'Det ikke mig';
  errorMessage.className = 'error-message hidden';

  const gameContainer = document.getElementById('game-container');
  if (gameContainer) {
    gameContainer.appendChild(scoreLabel);
    gameContainer.appendChild(errorMessage);
  }
}

function updateScore() {
  scoreLabel.textContent = `Score: ${score}`;
}

function showErrorMessage() {
  errorMessage.classList.remove('hidden');
  errorMessage.classList.add('visible');

  setTimeout(() => {
    errorMessage.classList.add('hidden');
    errorMessage.classList.remove('visible');
  }, 900);
}

function getSafePosition(usedPositions) {
  const positions = [];

  for (let x = 10; x <= 80; x += 8) {
    for (let y = 12; y <= 72; y += 8) {
      const nearCenter = Math.abs(x - 50) < 18 && Math.abs(y - 46) < 18;
      if (nearCenter) continue;

      let valid = true;
      for (const pos of usedPositions) {
        const distance = Math.hypot(x - pos.x, y - pos.y);
        if (distance < 18) {
          valid = false;
          break;
        }
      }

      if (valid) {
        positions.push({ x, y });
      }
    }
  }

  if (!positions.length) {
    return { x: 20, y: 20 };
  }

  return positions[Math.floor(Math.random() * positions.length)];
}

function placeItem(item, usedPositions) {
  const position = getSafePosition(usedPositions);
  usedPositions.push(position);

  item.style.left = `${position.x}%`;
  item.style.top = `${position.y}%`;
  item.style.bottom = 'auto';
  item.style.right = 'auto';
}

function chooseRandomFish() {
  const shuffledFish = shuffleArray(fishOptions);
  const targetFishPath = toAssetUrl(shuffledFish[0]);
  const shuffledAssets = shuffleArray(assetLibrary);

  const decoyPaths = shuffledFish
    .slice(1)
    .map((fish) => toAssetUrl(fish))
    .concat(shuffledAssets.map((asset) => toAssetUrl(asset)))
    .slice(0, seaItems.length - 1);

  hiddenFish.dataset.target = targetFishPath;
  hiddenFish.src = targetFishPath;
  hiddenFish.alt = 'Målfisk';
  hiddenFish.style.display = 'block';

  if (targetFishImage) {
    targetFishImage.src = targetFishPath;
    targetFishImage.alt = 'Målfisk';
  }

  if (successFishImage) {
    successFishImage.src = targetFishPath;
    successFishImage.alt = 'Målfisk';
  }

  const usedPositions = [];

  seaItems.forEach((item) => {
    item.style.display = 'block';
    item.style.visibility = 'visible';

    if (item === hiddenFish) {
      placeItem(item, usedPositions);
      return;
    }

    const fallbackPath = toAssetUrl(assetLibrary[Math.floor(Math.random() * assetLibrary.length)]);
    const fishPath = decoyPaths.shift() || fallbackPath;
    item.src = fishPath;
    placeItem(item, usedPositions);
  });
}

// Start spillet
function startGame() {
  score = 0;
  updateScore();

  if (roundTimer) {
    clearTimeout(roundTimer);
    roundTimer = null;
  }

  startScreen.classList.remove('active');
  playScreen.classList.add('active');

  chooseRandomFish();

  successMessage.classList.add('hidden');
  targetPrompt.classList.remove('hidden');

  setTimeout(() => {
    targetPrompt.classList.add('hidden');
  }, 2500);
}

// Vis menu igen
function showMenu() {
  if (roundTimer) {
    clearTimeout(roundTimer);
    roundTimer = null;
  }

  playScreen.classList.remove('active');
  startScreen.classList.add('active');
  score = 0;
  updateScore();
}

// Når spilleren klikker på den rigtige fisk
function foundFish() {
  if (successFishImage) {
    successFishImage.src = hiddenFish.src;
  }

  score += 10;
  updateScore();

  targetPrompt.classList.add('hidden');
  successMessage.classList.remove('hidden');

  if (roundTimer) {
    clearTimeout(roundTimer);
  }

  roundTimer = setTimeout(() => {
    successMessage.classList.add('hidden');
    targetPrompt.classList.remove('hidden');
    chooseRandomFish();

    setTimeout(() => {
      targetPrompt.classList.add('hidden');
    }, 2500);
  }, 1500);
}

// Hvis der klikkes ved siden af eller på forkert element
function wrongClick() {
  score = Math.max(0, score - 1);
  updateScore();
  showErrorMessage();
}
