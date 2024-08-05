import "./style.css";

const onClickAdd = () => {
    // テキストボックスの値を取得して、初期化する
    const inputText = document.getElementById("add-text").value
    // 値を取得で来たら、テキストボックスの値は元の空に戻す
    document.getElementById("add-text").value = ""
    
    // li生成
    const li = document.createElement("li")

    // div生成
    const div = document.createElement("div")
    div.className = "list-row"

    // p生成
    const p = document.createElement("todo-item")
    p.className = "todo-item"
    // pタグで囲まれた中の文字列の設定
    p.innerText = inputText

    // 階層構造を表現する
    // liタグの子要素に各要素を追加（append追加であることに注意）
    div.appendChild(p) // divの子にpを追加する
    li.appendChild(div)

    // 該当箇所にDOMを差し込む
    document.getElementById("incomplete-list").appendChild(li) // imcomplete-listの子にliを追加する

    console.log(li)
}

document.getElementById("add-button").addEventListener("click", onClickAdd)