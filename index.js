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

    // buttonタグ生成
    const completeButton = document.createElement("button")
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親にあるliタグから完了ボタンと削除ボタンを削除する
        const moveTarget = completeButton.closest("li")
        // 隣のある要素を取得し、削除
        completeButton.nextElementSibling.remove()
        // 同様にして完了ボタン自信を削除
        completeButton.remove()

        // 戻すボタンを生成し、divタブ配下に設定
        const backButton = document.createElement("button")
        backButton.innerText = "戻す"
        moveTarget.firstElementChild.appendChild(backButton)

        // 完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget)

    })

    // buttonタグ生成
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除する
        const deleteTarget = deleteButton.closest("li") // 最も近いliという名前の親を探す
        // 未完了リストから対象のDOMを削除する
        document.getElementById("incomplete-list").removeChild(deleteTarget)
    })

    // 階層構造を表現する
    // liタグの子要素に各要素を追加（append追加であることに注意）
    div.appendChild(p) // divの子にpを追加する
    li.appendChild(div) // liの子にdivを追加する。つまり最も上位の親

    div.appendChild(completeButton)
    div.appendChild(deleteButton)

    // 該当箇所にDOMを差し込む
    document.getElementById("incomplete-list").appendChild(li) // imcomplete-listの子にliを追加する

    console.log(li)
}

const onClickComplete = () => {
    // liを削除
    // liをcomplete-areaのulの子にする必要がある
}

/**
 * 常時表示されるボタン
 */
// 追加ボタンが押されたとき
document.getElementById("add-button").addEventListener("click", onClickAdd)

// /**
//  * 生成されるボタンなので生成時に同時に定義しておく
//  */
// // 完了ボタンが押されたとき
// document.getElementById("complete-button").addEventListener("click", onClickComplete)