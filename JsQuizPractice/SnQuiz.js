'use strict';
{

    let scores = 0;
    let result = [];

    document.querySelector('button').addEventListener('click', () => {
      document.querySelectorAll('input').forEach((radio, index) => {
        if (radio.checked === true) {
          if (radio.value === "correct") {
            scores ++;
            // result.push(true);
          } else {
            // result.push(false);
            result.push(Math.floor(index / 3) +1);
          }
        }
      });

      // console.log(result);
      // let resultDisplay = [];
      // for ( let i = 0; i < result.length ; i++) {
      //   if (result[i] == true) {
      //     resultDisplay.push(`${i+1}問目 : 正解！\n`);
      //   } else {
      //     resultDisplay.push(`${i +1}問目 : 不正解！\n`);
      //   }
      // }

      if(scores == 9) {
        if(!alert(`全問正解だよ！これで君もスノオタ！`)){
            scores = 0;
            result = [];
          }
      } else if (scores >= 5) {
        if(!alert(`${scores}問正解だよ！\n${result}番を間違えていたよ！\nあと少し！`)){
          scores = 0;
          result = [];
        }
      } else {
        if(!alert(`${scores}問正解だよ！\n${result}番を間違えていたよ！\nYouTube見るところから始めてみよう！`)){
          scores = 0;
          result = [];
        }
      }

      // if(!alert(`${scores}問正解だよ！`)){
      //   scores = 0;
      // }
    });

    {
      const open = document.getElementById('open');
      const overlay = document.querySelector('.overlay');
      const close = document.getElementById('close');
    
      open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
      });
    
      close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
      });
    }
}
