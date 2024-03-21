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
    

    const draggableElements = document.getElementsByClassName('draggable');
    let lastPosX = [], lastPosY = [];
    let offsetX, offsetY;

    // Função para iniciar o arrastamento
    function startDragging(event) {
        // Calcula o deslocamento entre o canto superior esquerdo do elemento e o ponto onde o mouse foi clicado
        offsetX = event.clientX - lastPosX[event.target.shipIndex];
        offsetY = event.clientY - lastPosY[event.target.shipIndex];

        // Adiciona um ouvinte de eventos para o movimento do mouse e para soltar o mouse
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
    }

    // Função para arrastar o elemento
    function drag(event) {
        // Define a nova posição do elemento com base na posição do mouse e no deslocamento calculado
        draggableElements[event.target.shipIndex].style.left = (event.clientX - offsetX) + 'px';
        draggableElements[event.target.shipIndex].style.top = (event.clientY - offsetY) + 'px';
    }

    // Função para parar de arrastar o elemento
    function stopDragging() {
        // Remove os ouvintes de eventos para o movimento do mouse e para soltar o mouse
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDragging);
    }

    
    function updatePositions(){}
   
   function setupGame(){            
        // Adiciona um ouvinte de eventos aos elemento para iniciar o arrastamento
        for(let i = 0; i < draggableElements.length;i++){            
            draggableElements[i].addEventListener('mousedown', startDragging);
            lastPosX.push(draggableElements[i].getBoundingClientRect().left);
            lastPosY.push(draggableElements[i].getBoundingClientRect().top);
            draggableElements[i].shipIndex = i;
        }
   }
   
    setupGame();
    createGrid();

});
