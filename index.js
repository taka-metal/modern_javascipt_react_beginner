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

// アロー関数（オブジェクトを返却）
// これも単一行を返しているのとおなじということでreturnはいらない
const func6 = (num1, num2) => ({
    doubleNum1: num1 * 2,
    doubleNum2: num2 * 2
})
console.log(func6(1, 10))