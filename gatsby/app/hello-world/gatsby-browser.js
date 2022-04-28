// CSSをグローバルに適応できる
import "./src/styles/style.css"

// 読み込み開始時の処理
exports.onClientEntry = () => {
	console.log("We've started!")
}