const holder = document.querySelector('.grid-holder');
let grid = 16;
let subGrid = Math.round((230 * grid) / 100);
const setUpButton = document.querySelector('.set-grid');
let randomColor = false;
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

const changeGrid = (grid, subGrid) => {
  holder.innerHTML = '';

  for (let i = 0; i < grid; i++) {
    const div = document.createElement('div');
    div.className = `${i}`;
    div.style.display = 'flex';
    div.style.backgroundColor = 'black';
    div.style.justifyContent = 'center';
    div.style.flex = 1;
    
    holder.appendChild(div);
    for (let j = 0; j < grid; j++) {
      const subDiv = document.createElement('div');
      subDiv.className = `sub${j}`;
      subDiv.style.backgroundColor = 'white';
      subDiv.style.flex = 1;
      subDiv.addEventListener('mouseover', (e) => {
        if (randomColor === true && e.buttons == 1) {
          randomColorIn(e.target);
        } else if (e.buttons == 1 && randomColor == false) {
          colorIn(e.target);
        }
      });

      subDiv.addEventListener('click', (e) => {
        if (randomColor === true && e.buttons == 0) {
          randomColorIn(e.target);
        } else if (e.buttons == 0 && randomColor === false) {
          colorIn(e.target);
        }
      });
      div.appendChild(subDiv);
    }
  }
}

const colorIn = (target) => {
  target.style.backgroundColor = 'black';
}

const randomColorIn = (target) => {
  const randomColor1 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
  const randomColor2 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
  const randomColor3 = (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
  target.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

changeGrid(grid, subGrid);