// 変数を用意
let count = 0;

//関数を定義 アローファンクションで記述 引数はなし
const countUp = () => {
    // コンソールにカウントしている変数を表示 カウントは１ずつ足していく。カウント後に1足す
    console.log(count++);

    // 1000ミリセックごとにcountUp関数をsetTimeoutで呼び出す←ループでの処理
    const timeoutId = setTimeout(countUp, 1000);

    // カウントしているcountが3だったら{}の記述を実行
    if (count == 3) {
        //コンソールに記述
        console.log(`'Hello world' from other file. after ${count}sec.`);
        
        //引数にとっている変数(メソッド)を実行する→セットタイムアウトを止める←ループを止める処理
        clearTimeout(timeoutId);
    }
};

// 関数を実行
countUp();
