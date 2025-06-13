/*--------------------------------------*
  src/index.tsx
*---------------------------------------*/
import React from 'react'; // JSXを使うには必須　React17以降は省略可　reactの部品デス用と言う目的慣例的
/**
 * react-dom/client パッケージはクライアント側でアプリを初期化する際に使うクライアント専用メソッドを提供しています。ほとんどのコンポーネントではこのモジュールを使う必要はありません
 */
import ReactDOM from 'react-dom/client';// react18以降
import App from './App'; // App.tsxを読み込む命令

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);