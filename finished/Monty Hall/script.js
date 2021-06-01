let wins = 0
let loses = 0
let doors = []
let winsCounter = document.getElementById("win")
let losesCounter = document.getElementById("lose")

function doorsScript(){
    doors = initializeDoorsArray()
    setFirstDoorsStage()
}

function initializeDoorsArray(){
    let doors = []
    doors[0] = document.getElementById("1")
    doors[1] = document.getElementById("2")
    doors[2] = document.getElementById("3")

    return doors;
}

function setFirstDoorsStage(){
    let rightDoor = chooseRightDoor()
    doors[0].onclick = () => highlightWrongDoor(1, rightDoor)
    doors[1].onclick = () => highlightWrongDoor(2, rightDoor)
    doors[2].onclick = () => highlightWrongDoor(3, rightDoor)
}

function setSecondDoorsStage(rightDoor){
    doors[0].onclick = () => highlightRightDoor(1, rightDoor)
    doors[1].onclick = () => highlightRightDoor(2, rightDoor)
    doors[2].onclick = () => highlightRightDoor(3, rightDoor)
}

function highlightWrongDoor(currentId, rightId){
    let anotherDoors = [1,2,3]
    let wrongDoors = [1,2,3]

    removeElementFromArray(currentId, anotherDoors)
    removeElementFromArray(rightId, wrongDoors)

    let intersection = anotherDoors.filter(x => wrongDoors.includes(x));

    if(intersection.length == 2){
        let rand = Math.floor(Math.random() * 2)
        let wrongRandomDoor = intersection[rand]
        doors[wrongRandomDoor - 1].classList.add("wrong")
    }
    else if(intersection.length == 0){
        throw("Error!")
    }
    else{
        let wrong = intersection[0] - 1
        console.log(wrong - 1);
        doors[wrong].classList.add("wrong")
    }
    setSecondDoorsStage(rightId)
}

function highlightRightDoor(currentId, rightId){
    doors[rightId - 1].classList.add("right")
    if(currentId == rightId){
        wins++
    }else{
        loses++
    }
    restartGame()
}

function restartGame(){
    losesCounter.innerHTML = loses
    winsCounter.innerHTML = wins

    doors[0].classList.remove("wrong")
    doors[0].classList.remove("right")

    doors[1].classList.remove("wrong")
    doors[1].classList.remove("right")

    doors[2].classList.remove("wrong")
    doors[2].classList.remove("right")

    setFirstDoorsStage()
}

function chooseRightDoor(){
    let rightDoor = rng()
    return rightDoor
}


function rng(){
    return Math.floor(Math.random() * (4 - 1) + 1);  
}

function removeElementFromArray(element, array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == element){
            array.splice(i, 1)
        }
    }
}

doorsScript();