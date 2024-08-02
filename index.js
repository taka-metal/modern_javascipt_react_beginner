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

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird"
val5.push("monkey")
console.log(val5)