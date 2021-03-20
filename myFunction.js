/**
 * 右矢印キーを押したときに次の番号の画面に遷移する関数
 */
function KeyDownFunc(e){
	// キーコード取得
	var key_code = e.keyCode;
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
	// キーボードを押したときのイベントを設定
	document.addEventListener("keydown" , KeyDownFunc);
}
/**
 * 画面遷移時にタイピングを開始する関数
 */
function startTyping(){
    //タイピングを開始するボタンのクリックイベント発火
    document.getElementById("type").click();
}
window.onload = startTyping;
