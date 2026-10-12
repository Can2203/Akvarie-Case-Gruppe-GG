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
