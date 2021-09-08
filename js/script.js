'use strict';

//ハンバーガーボタンをクリックしたらグローバルナビゲーションが出たり消えたりする
document.getElementById('menu-btn').onclick = function(evt) {
  evt.preventDefault();
  document.getElementById('gnavi').classList.toggle('open');
  evt.currentTarget.classList.toggle('close');
};


//ページトップボタンの作成 スクロールイベント
window.onscroll = function(evt){
  //スクロール値の取得
  const position = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(position);

  //positionの値が300以上なら#page-topに.openを追加
  //それ以外の時は#page-topから.openを削除

  if (position >= 300) {
    document.getElementById('page-top').classList.add('open');
  } else {
    document.getElementById('page-top').classList.remove('open');
  }


};

//課題01
//日付を取得
//new Date(西暦, 月-1, 日)　で呼び出そう
const whatDay = document.getElementById('what-day');
whatDay.onsubmit = function(event) {
  event.preventDefault();
  //入力されたデータの取得
  const yyyy = whatDay.year.value; //西暦データ
  const mm = whatDay.month.value; //月データ
  const dd = whatDay.date.value; //日データ

  const now = new Date(yyyy, mm-1, dd).getDay();
  const day = ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];

  //結果表示
  document.getElementById('A-01').textContent = `${yyyy}年${mm}月${dd}日`;
  document.getElementById('A-02').textContent = day[now];
};


//課題02
//cm → m　の直し方
// cm / 100 をすれば m になる　

const whatBmi = document.getElementById('what-bmi');
whatBmi.onsubmit = function(event) {
  event.preventDefault();

  //入力データの取得
  const Nm = whatBmi.cm.value / 100;
  const Nkg = whatBmi.kg.value;

  const bmi = Math.round(Nkg / (Nm * Nm) * 10) / 10;
  let bmiMsg = '';
  if (bmi >= 25) {
    bmiMsg = '肥満気味';
  } else if (bmi >= 18.5) {
    bmiMsg = '標準';
  } else {
    bmiMsg = '痩せすぎ';
  }

  //結果表示
  document.getElementById('A-03').textContent = bmi;
  document.getElementById('A-04').textContent = bmiMsg;
};

//課題03
const slideImg = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];

//最初の２秒用
for (let i = 0; i < 5; i++) {
  document.getElementById('slide-img' + (i+1)).innerHTML = `<img src="images/${slideImg[i]}" alt="">`;
}

//２秒ごとに写真を並べ替える
function slider() {
  const slideNum = slideImg.shift(); //先頭データの削除
  slideImg.push(slideNum); //末尾にデータ追加

  //写真の再表示
  // for (let i = 0; i < 5; i++) {
  //   document.getElementById('slide-img' + (i+1)).innerHTML = `<img src="images/${slideImg[i]}" alt="">`;
  // }

  //forEach() の場合
  slideImg.forEach(function(data, index) {
    document.getElementById('slide-img' + (index+1)).innerHTML = `<img src="images/${data}" alt="">`;
  });
}

setInterval(slider, 2000);

