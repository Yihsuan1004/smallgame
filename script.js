let boxImage1 = document.getElementById('box1');
let boxImage2 = document.getElementById('box2');
let boxImage3 = document.getElementById('box3');
let boxImage4 = document.getElementById('box4');
let boxImage5 = document.getElementById('box5');
let boxImage6 = document.getElementById('box6');
let boxImage7 = document.getElementById('box7');
let boxImage8 = document.getElementById('box8');
let boxImage9 = document.getElementById('box9');

let bomb = "https://yihsuan1004.github.io/smallgame/img/boom.jpg";
let money= "https://yihsuan1004.github.io/smallgame/img/money.jpg";
let closedBox = "https://yihsuan1004.github.io/smallgame/img/safebox-01.jpg";

let openBox1;
let openBox2;
let openBox3;
let openBox4;
let openBox5;
let openBox6;
let openBox7;
let openBox8;
let openBox9;
let numClosedBoxes = 8;
let startButton = document.getElementById('button');
let current = document.getElementById('currentnum');
let highest = document.getElementById('highestnum');
let currentscore = 0;
let highestscore = 0;


const clickOnBomb = (box) =>{
  if ( box === bomb){
   startButton.innerHTML = 'You Lose! Try again?';
   currentPlaying = false;
   currentscore = 0;
  }
  else{
    getYourScore();
  }
}

/*控制一個箱子只能開一次*/
const isClicked = (box) => {
  if (box.src == closedBox) {
    return true;
  } else {
    return false;
  }
}

const playbox =() =>{
  numClosedBoxes--;
  if (numClosedBoxes === 0 && currentPlaying){
    startButton.innerHTML = 'You WIN!';
    currentPlaying = false;
  }
  else{

  }
}


/*---分數判斷---*/
const getYourScore = () =>{
    currentscore++
    current.innerHTML = currentscore;
    highest.innerHTML = highestscore;
    if(currentscore > highestscore){
    highest.innerHTML = currentscore;
    }
}


/*---隨機分配炸彈---*/
const randomBoxGenerator = () =>{
  randomBox = Math.floor(Math.random()*numClosedBoxes); 
  switch (randomBox){
      case 1 :
          openBox1 = bomb;
          openBox2 = money;
          openBox3 = money;
          openBox4 = money;
          openBox5 = money;
          openBox6 = money;
          openBox7 = money;
          openBox8 = money;
          openBox9 = money;
          break;
      case 2 :
          openBox1 = money;
          openBox2 = bomb;
          openBox3 = money;
          openBox4 = money;
          openBox5 = money;
          openBox6 = money;
          openBox7 = money;
          openBox8 = money;
          openBox9 = money;
          break;
     case 3 :
          openBox1 = money;
          openBox2 = money;
          openBox3 = bomb;
          openBox4 = money;
          openBox5 = money;
          openBox6 = money;
          openBox7 = money;
          openBox8 = money;
          openBox9 = money;
          break;
    
      case 4 :
          openBox1 = money;
          openBox2 = money;
          openBox3 = money;
          openBox4 = bomb;
          openBox5 = money;
          openBox6 = money;
          openBox7 = money;
          openBox8 = money;
          openBox9 = money;
          break;
      case 5 :
          openBox1 = money;
          openBox2 = money;
          openBox3 = money;
          openBox4 = money;
          openBox5 = bomb;
          openBox6 = money;
          openBox7 = money;
          openBox8 = money;
          openBox9 = money;
          break;
      case 6 :
          openBox1 = money;
          openBox2 = money;
          openBox3 = money;
          openBox4 = money;
          openBox5 = money;
          openBox6 = bomb;
          openBox7 = money;
          openBox8 = money;
          openBox9 = money;
          break; 
      case 7 :
          openBox1 = money;
          openBox2 = money;
          openBox3 = money;
          openBox4 = money;
          openBox5 = money;
          openBox6 = money;
          openBox7 = bomb;
          openBox8 = money;
          openBox9 = money;
          break;  
      case 8 :
          openBox1 = money;
          openBox2 = money;
          openBox3 = money;
          openBox4 = money;
          openBox5 = money;
          openBox6 = money;
          openBox7 = money;
          openBox8 = bomb;
          openBox9 = money;
          break;    
      case 9 :
          openBox1 = money;
          openBox2 = money;
          openBox3 = money;
          openBox4 = money;
          openBox5 = money;
          openBox6 = money;
          openBox7 = money;
          openBox8 = money;
          openBox9 = bomb;
          break;        
          
  }
}


box1.onclick = () => {
    if(currentPlaying  && isClicked(boxImage1)){
    boxImage1.src = openBox1;
    clickOnBomb(openBox1);
    playbox();
    }
 }

box2.onclick = () => {
    if(currentPlaying  && isClicked(boxImage2)){
    boxImage2.src = openBox2;
    clickOnBomb(openBox2);
    playbox();
    }
}

box3.onclick = () => {
   if(currentPlaying  && isClicked(boxImage3)){
    boxImage3.src = openBox3;
    clickOnBomb(openBox3);
    playbox();
    }
}

box4.onclick = () => {
    if(currentPlaying  && isClicked(boxImage4)){
    boxImage4.src = openBox4;
    clickOnBomb(openBox4);
    playbox();
    }
}

box5.onclick = () => { 
    if(currentPlaying  && isClicked(boxImage5)){
    boxImage5.src = openBox5;
    clickOnBomb(openBox5);
    playbox();
    }

}

box6.onclick = () => {
   if(currentPlaying  && isClicked(boxImage6)){
    boxImage6.src = openBox6;
    clickOnBomb(openBox6);
    playbox();
    }
}

box7.onclick = () => {
  if(currentPlaying  && isClicked(boxImage7)){
    boxImage7.src = openBox7;
    clickOnBomb(openBox7);
    playbox();
    }
}

box8.onclick = () => {
 if(currentPlaying  && isClicked(boxImage8)){
    boxImage8.src = openBox8;
    clickOnBomb(openBox8);
    playbox();
    }
}

box9.onclick = () => {
 if(currentPlaying && isClicked(boxImage9)){
    boxImage9.src = openBox9;
    clickOnBomb(openBox9);
    playbox();
    }
}

/*遊戲重新開始，初始值的設定*/
button.onclick = () =>{
   startButton.innerHTML = "Try it!";
   boxImage1.src = closedBox;
   boxImage2.src = closedBox;
   boxImage3.src = closedBox;
   boxImage4.src = closedBox;
   boxImage5.src = closedBox;
   boxImage6.src = closedBox;
   boxImage7.src = closedBox;
   boxImage8.src = closedBox;
   boxImage9.src = closedBox;
   randomBoxGenerator();
   numClosedBoxes = 8 ;
   currentscore = 0;
   current.innerHTML = currentscore;
   currentPlaying = true;
}

currentPlaying = true;
randomBoxGenerator();







