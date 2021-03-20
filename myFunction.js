function KeyDownFunc(e){

	// ------------------------------------------------------------
	// 入力情報を取得
	// ------------------------------------------------------------
	// キーコード
	var key_code = e.keyCode;
	// Shiftキーの押下状態
	var shift_key = e.shiftKey;
	// Ctrlキーの押下状態
	var ctrl_key = e.ctrlKey;
	// Altキーの押下状態
	var alt_key = e.altKey;

	// ------------------------------------------------------------
	// 出力テスト
	// ------------------------------------------------------------
	console.info("code:" + key_code);
	console.info("shift:" + shift_key);
	console.info("ctrl" + ctrl_key);
	console.info("alt:" + alt_key);

    //右矢印キー押下時
    if(key_code === 39){
        //現在のアドレスを取得
        let href = location.href;
        //タイピングページの場合
        if(href.startsWith("https://x-typing.com/basis/display/no-")){
            //現在のアドレスの末尾の数字に1加算した数字を取得
            let nextPageNumber = parseInt(href.slice(href.search(/\d+$/))) + 1;
            //次の番号のページに遷移する。
            location.href = href.slice(0,href.search(/\d+$/)) + nextPageNumber;
        }
    }
}
if(document.addEventListener){
	// キーボードを押したときに実行されるイベント
	document.addEventListener("keydown" , KeyDownFunc);

}
//画面遷移時にタイピングを開始する関数
function startTyping(){
    //タイピングを開始するボタンのクリックイベント発火
    document.getElementById("type").click();
}
window.onload = startTyping;
