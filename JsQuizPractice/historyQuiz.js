'use strict';
{

    let scores = 0;

    document.querySelector('button').addEventListener('click', () => {
      document.querySelectorAll('input').forEach((radio) => {
        if (radio.checked === true) {
          if (radio.value === "correct") {
            scores ++;
          }
        }
      });


      if(scores == 10) {
        if(!alert(`全問正解だよ！すごーい！歴史博士！`)){
            scores = 0;
          }
      } else if (scores >= 8) {
        if(!alert(`${scores}問正解だよ！あと少し！`)){
          scores = 0;
        }
      } else if(scores >= 5) {
        if(!alert(`${scores}問正解だよ！どこが間違えたか見返してみよう！`)){
          scores = 0;
        }
      } else {
        if(!alert(`${scores}問正解だよ！もう一度復習してみよう！`)){
          scores = 0;
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










