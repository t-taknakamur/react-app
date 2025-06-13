/*--------------------------------------*
  src/components/layout/Footer.tsx
*---------------------------------------*/
import React from 'react';

/**
 * Rect.FC関数コンポーネントとデスという型宣言 引数propsを受けて、jsx要素を返す関数コンポーネントの型
 * 実務ではconst App = () => (と書くパターンも多い
 * @returns 
 */
const Footer: React.FC = () => (// Rect.FC関数コンポーネントとデスという型宣言 引数propsを受けて、jsx要素を返す関数コンポーネントの型
  <footer className="footer">
    <p>© 2025 Your Company</p>
  </footer>
);

export default Footer;