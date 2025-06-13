/*--------------------------------------*
  src/App.tsx
*---------------------------------------*/
import React from 'react'; //　Reacのコンポーネントを書くファイル
import Layout from './components/layout/Layout';
import MainContent from './components/main/MainContent';
import './App.css';

//: React.FC は型アノテーション。「これはReactの“Function Component（関数コンポーネント）”ですよ」と型で示しています
const App: React.FC = () => (
  <Layout>
    <MainContent />
  </Layout>
);

export default App;