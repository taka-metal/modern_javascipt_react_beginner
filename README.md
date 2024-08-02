# modern_javascipt_react_beginner

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/taka-metal/modern_javascipt_react_beginner)

# 仮想DOM
- DOM(Document Object Model)はHTMLをJSから参照・操作する仕組みで。これによってJSではHTMLをただの文字列として操作するのではなく、オブジェクトとして扱えるようになる。
- ただしDOMだけでは、レンダリングスピードに課題があったり、複雑な処理は難読になる傾向があった
- 仮想DOMは上記のような問題に対応したやつ！！
- 開発者は仮想DOMを意識することはない

# パッケージマネージャー
- 背景としてモジュール化が進んでいたことで、それに伴う問題も生じていた
- パッケージマネージャーは上記の問題を解決してくれる
    - パッケージの依存関係を解決
    - import先が明示的になる
    - 世界中のパッケージをコマンド1つで利用可能
    - 他社と共有も簡単に
- npmの登場人物
    - NPM: パッケージのレジストリ（あんまり意識しなくおけ）
    - package.json: 設計書的なやつ
    - package-lock.json: 自動で生成される依存関係、バージョンの解決
    - node_modules: 各モジュールの実態。サイズが膨大なのでGitHubにはあげない
