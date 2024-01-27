const holder = document.querySelector('.grid-holder');
let grid = 16;
let subGrid = Math.round((230 * grid) / 100);
const setUpButton = document.querySelector('.set-grid');
setUpButton.addEventListener('click', () => {
  grid = Number(prompt('How many rows would you like to have? The number should not exceed 100', grid));
  subGrid = Math.round((230 * grid) / 100);
  if (grid <= 100 && grid >= 0 && typeof grid === 'number') {
    changeGrid(grid, subGrid);
  } else {
    alert('Your number should not exceed 100 and should only include valid numbers');
  }
});

const changeGrid = (grid, subGrid) => {
  holder.innerHTML = '';

  for (let i = 0; i < grid; i++) {
    const div = document.createElement('div');
    div.className = `${i}`;
    div.style.display = 'flex';
    //div.style.gap = '1px ';
    div.style.backgroundColor = 'black';
    div.style.justifyContent = 'center';
    div.style.flex = 1;
    
    holder.appendChild(div);
    for (let j = 0; j < grid; j++) {
      const subDiv = document.createElement('div');
      subDiv.className = `sub${j}`;
      //subDiv.textContent = '';
      subDiv.style.backgroundColor = 'white';
      subDiv.style.flex = 1;
      subDiv.addEventListener('mouseover', (e) => {
        if (e.buttons == 1) {
          colorIn(e.target);
        }
      });

      subDiv.addEventListener('click', (e) => {
        if (e.buttons == 0) {
          colorIn(e.target);
        }
      })
      div.appendChild(subDiv);
    }
  }
}

const colorIn = (target) => {
  target.style.backgroundColor = 'blue';
}

changeGrid(grid, subGrid);