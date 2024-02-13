'use strict';
{

  let scores = 0;
  let result = [];

  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('input').forEach((radio, index) => {
      if (radio.checked === true) {
        if (radio.value === "correct") {
          scores ++;
        } else {
          result.push(index /3 +1);
        }
      }
    });


      if(scores == 10) {
        if(!alert(`全問正解だよ！すごーい！歴史博士！`)){
            scores = 0;
            result = [];
          }
      } else if (scores >= 8) {
        if(!alert(`${scores}問正解だよ！\n${result}番を間違えていたよ！\nあと少し！`)){
          scores = 0;
          result = [];
        }
      } else if(scores >= 5) {
        if(!alert(`${scores}問正解だよ！\n${result}番を間違えていたよ！\n見返してみよう！`)){
          scores = 0;
          result = [];
        }
      } else {
        if(!alert(`${scores}問正解だよ！\n${result}番を間違えていたよ！\nもう一度復習してみよう！`)){
          scores = 0;
          result = [];
        }
      }


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










