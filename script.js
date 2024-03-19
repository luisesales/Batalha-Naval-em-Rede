document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('enemyGrid');
    const cells = [];
    const ships = [
        { locations: [0, 1, 2], hits: ['', '', ''] },
        { locations: [7, 8, 9], hits: ['', '', ''] }
    ];

    function createGrid() {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cells.push(cell);
            cell.dataset.index = i;
            cell.addEventListener('click', handleClick);
            grid.appendChild(cell);
        }
    }

    function handleClick(event) {
        const index = event.target.dataset.index;
        const hit = checkHit(index);
        if (hit) {
            event.target.classList.add('hit');
        } else {
            event.target.classList.add('miss');
        }
    }

    function checkHit(index) {
        for (let ship of ships) {
            const position = ship.locations.indexOf(parseInt(index));
            if (position !== -1) {
                ship.hits[position] = 'hit';
                if (ship.hits.every(hit => hit === 'hit')) {
                    console.log('Ship sunk!');
                }
                return true;
            }
        }
        return false;
    }

    createGrid();
});
