document.addEventListener('DOMContentLoaded', function() {
    const enemyGrid = document.getElementById('enemyGrid');
    const playerGrid = document.getElementById('playerGrid');
    const enemyCells = [], playerCells = [];
    const ships = [
        { locations: [0, 1, 2], hits: ['', '', ''] },
        { locations: [7, 8, 9], hits: ['', '', ''] }
    ];
    let playerShips = [
        { locations: [ , , ] , hits: ['', '', '']}
    ];

    


    function handleMove(event){
        let index = event.target.dataset.index;
        /*if(){

        }*/

    }




    function handleAttack(event) {
        const index = event.target.dataset.index;
        const hit = checkHit(index);
        if (hit) {
            event.target.classList.add('hit');
        } else {
            event.target.classList.add('miss');
        }
    }

    function createGrid() {
        for (let i = 0; i < 100; i++) {

            // Creating player cell
            const playerCell = document.createElement('div');
            playerCell.classList.add('cell');
            playerCell.dataset.index = i;
            playerCell.addEventListener('click', handleMove);
            playerGrid.appendChild(playerCell);

            // Creating enemy cell
            const enemyCell = document.createElement('div');            
            enemyCell.classList.add('cell');            
            enemyCells.push(enemyCell);
            enemyCell.dataset.index = i;
            enemyCell.addEventListener('click', handleAttack);
            enemyGrid.appendChild(enemyCell);
        }
    }


    function checkShip(index){
        //for (let ship of ships)
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
