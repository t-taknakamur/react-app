/*--------------------------------------*
  src/components/list/ListView.tsx
*---------------------------------------*/
import React from 'react';
import type { ListViewProps } from './ListView.types';
import RowItem from './RowItem';

const ListView: React.FC<ListViewProps> = ({ items }) => (
  <table className="list-view">
    <thead>
      <tr>
        <th>ID</th>
        <th>カテゴリID</th>
        <th>コード</th>
        <th>名称</th>
        <th>ユーザー</th>
        <th>登録者</th>
        <th>更新日</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <RowItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

export default ListView;
