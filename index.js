/**
 * const, let等の変数宣言
 *
 */
// var val1 = "var変数"
// console.log(val1)

// // var変数は再代入可能
// val1 = "var変数の上書き"
// console.log(val1)

// // var変数は再宣言可能
// // そもそも最近は非推奨だが、ESlintという静的解析ツールで警告を出してくれる。
// var val1 = "var変数を再宣言"
// console.log(val1)

// let val2 = "let変数"
// console.log(val2)

// // letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2)

// // letは再宣言は不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数"
// console.log(val3)

// // constは上書もダメ！
// val3 = "const変数の上書き"

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "じゃけぇ",
//     sge: 31
// }
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4)

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird"
// val5.push("monkey")
// console.log(val5)

/**
 * テンプレート文字列
 */
// const myName = "じゃけぇ";
// const age = 31;

// // 従来の方法
// const message1 = "私の名前は" + myName + "デス";
// console.log(message1)

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${myName}デス`
// console.log(message2)

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//     return str
// }
// console.log(func1("func1デス"))

// // アロー関数
// const func2 = (str) => {
//     return str
// }
// console.log(func2("func2デス"))

// // アロー関数（省略版1）
// const func3 = str => {
//     return str
// }
// console.log(func3("func3デス"))

// // アロー関数（省略版2）
// const func4 = str => str
// console.log(func4("func4デス"))

// // アロー関数（練習）
// const func5 = (a, b) => a + b
// console.log(func5(1, 10))

// // アロー関数（オブジェクトを返却）
// // これも単一行を返しているのとおなじということでreturnはいらない
// const func6 = (num1, num2) => ({
//     doubleNum1: num1 * 2,
//     doubleNum2: num2 * 2
// })
// console.log(func6(1, 10))

/**
 * 分割代入
 */
// const myProfile = {
//     name: "じぇけぇ",
//     age: 31
// }
// const message1 = `私の名前は${myProfile.name}デス。年齢は${myProfile.age}デス。`
// console.log(message1)

// // オブジェクトの分割代入
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}デス。年齢は${age}デス。`
// console.log(message1)

// //　配列の分割代入
// const myProfile = ["じゃけぇ", 31]

// // 分割代入する際に任意の変数名を設定する(内部では順番を参照して代入している)！
// const [name, age] = myProfile
// const message3 = `私の名前は${name}デス。年齢は${age}デス。`
// console.log(message3)

// デフォルト値(関数の引数として使う)
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`)
// //                    ^^^^^^^^デフォルト値
// sayHello()
// sayHello("じゃけぇ")

// //　【しっかり覚えておく！！】デフォルト値(オブジェクトの分割代入として使う)
// const myProfile = {
//     age: 31
// }
// const { age, name = "ゲスト"} = myProfile
// console.log(age)
// console.log(name)

/**
 * オブジェクトの省略記法
 */
// const name = "じゃけぇ"
// const age = 31

// const myProfile = {
//     name: name,
//     age : age
// }
// console.log(myProfile)

// // 上記のような場合は省略できるよ！
// const myProfile2 = {
//     name,
//     age
// }
// console.log(myProfile)

/**
 * スプレッド構文 ...
 * 基本的に配列の展開がメイン！！！
 */

// // 配列の展開
// const arr1 = [1, 2]
// // console.log(arr1)
// // console.log(...arr1) // 配列の中身がそのまま出力されている（展開）

// // 
// const sumFunc = (num1, num2) => console.log(num1 + num2)
// sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

// まとめる
// const arr2 = [1, 2, 3, 4, 5]
// const [num1, num2, ...num3] = arr2
// console.log(num1, num2, num3)

// 配列のコピー、結合
// const arr1 = [10, 20]
// const arr2 = [30, 40]

// const arr6 = [...arr1]
// console.log(arr6)

// const arr7 = [...arr1, ...arr2]
// console.log(arr7)

// // なんでこれはダメ？？
// // 同じ参照を引き継いでしまうから！！
// const arr8 = arr1
// arr8[0] = 100 // arr8だけ修正したいなあ
// console.log(arr8, arr1) // どっちも変わっちゃう！！
// // 配列とかオブジェクトは単純に=と書いてしまうと参照を引き継いでしまうので注意

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "佐藤", "鈴木"]
// // // ループの基本
// // for (let index = 0; index < nameArr.length; index++) {
// //     console.log(nameArr[index])    
// // }

// const nameArr2 = nameArr.map((name) => {
//     return name
// })
// console.log(nameArr2)

// 2番目の要素はインデックス番号を表す
// const nameArr3 = nameArr.map((name, index) => {
//     return `${index+1}番目は${name}デス`
// })
// console.log(nameArr3)

// const numArr = [1, 2, 3, 4, 5]
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1
// })
// console.log(newNumArr)

// 演習：鈴木以外はさん付けにする
const nameArr = ["田中", "佐藤", "鈴木"]
// const myName = "鈴木"
// const nameArrSan = nameArr.filter((name) => {
//     return name != myName
// }).map((name) => `${name}さん`) 
// console.log([...nameArrSan, myName])

// // 模範解答
// const nameArrSan = nameArr.map((name) => {
//     if (name === "鈴木") {
//         return name
//     } else {
//         return `${name}さん`
//     }
// })
// console.log(nameArrSan)

/**
 * 三項演算子
*/
// // ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 2 ? "trueデス": "falseデス"
// console.log(val1)

// // よくある使い方
// const num = "1300"
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください"
// console.log(formattedNum)
// // TypeScriptの場合型付けするため、このケースはあまりなさそう

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です"
// }
// console.log(checkSum(50, 60))
// console.log(checkSum(50, 40))

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// truthy, falsyについて
// 暗黙的にtruth判定、false判定されるもの
// falsy以外はtruthyになると覚える

// 下記の例はよく見る！！！
// const val = " "; // スペースはtruthy
// const val = NaN;
// if (val) {
//     console.log("valはtruthyデス")
// } else {
//     console.log("valはfalsyデス")
// }

/**
 * 短絡評価（結構使うよ）
 */
// 基本
const flag1 = true
const flag2 = true

if (flag1 || flag2) {
    console.log("1か2はtrueになります")
} else {
    console.log("1か2はfalseになります")
}
// 重要 || 左側がtruthyの時にその時点で返却する（短絡評価）
const num = null
const fee= num || "金額未設定です" // !?!?!?!?!
console.log(fee)

// 重要 $$ 左側がfalthyの時にその時点で返却する（短絡評価）
const num2 = null
const fee2= num && "金額未設定です" // !?!?!?!?!
console.log(fee)

