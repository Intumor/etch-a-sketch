const holder = document.querySelector('.grid-holder');
let grid = 16;
let subGrid = Math.round((230 * grid) / 100);
const setUpButton = document.querySelector('.set-grid');
let randomColor = false;
let gradualColoring = false;
setUpButton.addEventListener('click', () => {
  grid = Number(prompt('How many rows would you like to have? The number should not exceed 100', grid));
  subGrid = Math.round((230 * grid) / 100);
  if (grid <= 100 && grid >= 0 && typeof grid === 'number') {
    changeGrid(grid, subGrid);
  } else {
    alert('Your number should not exceed 100 and should only include valid numbers');
  }
});

const randomColorButton = document.querySelector('.color-randomizer')
randomColorButton.addEventListener('click', () => {
  if (randomColor === false) {
    randomColor = true;
    randomColorButton.classList.add('is-active');
    randomColorButton.textContent = 'Rainbow On';
  } else if (randomColor === true) {
    randomColor = false;
    randomColorButton.classList.remove('is-active');
    randomColorButton.textContent = 'Rainbow Off';
  }
});

const gradualColorButton = document.querySelector('.gradual-coloring');
gradualColorButton.addEventListener('click', () => {
  if (gradualColoring === false) {
    gradualColoring = true;
    gradualColorButton.classList.add('is-gradual');
  } else if (gradualColoring === true) {
    gradualColoring = false;
    gradualColorButton.classList.remove('is-gradual');
  }
});

const changeGrid = (grid, subGrid) => {
  holder.innerHTML = '';

  for (let i = 0; i < grid; i++) {
    const div = document.createElement('div');
    div.className = `${i}`;
    div.style.display = 'flex';
    div.style.backgroundColor = 'white';
    div.style.justifyContent = 'center';
    div.style.flex = 1;
    
    holder.appendChild(div);
    for (let j = 0; j < grid; j++) {
      const subDiv = document.createElement('div');
      subDiv.className = `sub${j}`;
      subDiv.style.backgroundColor = 'white';
      subDiv.style.flex = 1;
      subDiv.addEventListener('mouseover', (e) => {
        if ((randomColor === true && e.buttons == 1) && (gradualColoring === true && e.buttons == 1)) {
          gradualRandomColorIn(e.target);
        } else if (randomColor === true && e.buttons == 1) {
          randomColorIn(e.target);
        } else if (gradualColoring === true && e.buttons == 1) {
          gradualColorIn(e.target);
        } else if (e.buttons == 1 && randomColor == false) {
          colorIn(e.target);
        }
      });

      subDiv.addEventListener('click', (e) => {
        if ((randomColor === true && e.buttons == 0) && (gradualColoring === true && e.buttons == 0)) {
          gradualRandomColorIn(e.target);
        } else if (randomColor === true && e.buttons == 0) {
          randomColorIn(e.target);
        } else if (gradualColoring === true && e.buttons == 0) {
          gradualColorIn(e.target)
        } else if (e.buttons == 0 && randomColor === false) {
          colorIn(e.target);
        }
      });
      div.appendChild(subDiv);
    }
  }
}


const gradualColorIn = (target) => {
  let currentColor = target.style.backgroundColor;
  console.log(currentColor)
  let currentAlpha = currentColor;
  if (currentAlpha.split(',').length === 4) {
    console.log(currentAlpha);
    let targetAlpha = currentColor;
    let rgbaArr = [];
    for (let i = 0; i < targetAlpha.length; i++) {
      if (targetAlpha[i].match(/\d/g)) {
        rgbaArr.push(targetAlpha[i]);
      }
    }
    rgbaArr = rgbaArr.slice(3);
    targetAlpha = `${rgbaArr.at(-2)}.${rgbaArr.at(-1)}`;
    targetAlpha = Number(targetAlpha);
    target.style.backgroundColor = `rgba(0, 0, 0, ${targetAlpha + 0.1})`;
  }

  if (currentColor === 'white') {
    target.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
  }
}

const colorIn = (target) => {
  target.style.backgroundColor = 'black';
}

const gradualRandomColorIn = (target) => {
  let currentColor = target.style.backgroundColor;
  let currentAlpha = currentColor;
  if (currentAlpha.split(',').length === 4) {
    let targetAlpha = currentColor;
    let rgbaArr = [];
    for (let i = 0; i < targetAlpha.length; i++) {
      if (targetAlpha[i].match(/\d/g)) {
        rgbaArr.push(targetAlpha[i]);
      }
    }
    targetAlpha = `${rgbaArr.at(-2)}.${rgbaArr.at(-1)}`;
    targetAlpha = Number(targetAlpha);
    const randomColor1 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
    const randomColor2 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
    const randomColor3 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
    target.style.backgroundColor = `rgba(${randomColor1}, ${randomColor2}, ${randomColor3}, ${Number((targetAlpha + 0.1).toFixed(1))})`;
    return;
  }


  if (currentColor === 'white') {
    const randomColor1 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
    const randomColor2 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
    const randomColor3 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
    target.style.backgroundColor = `rgba(${randomColor1}, ${randomColor2}, ${randomColor3}, 0.1)`;
  }
}

const randomColorIn = (target) => {
  const randomColor1 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
  const randomColor2 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
  const randomColor3 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
  target.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

changeGrid(grid, subGrid);