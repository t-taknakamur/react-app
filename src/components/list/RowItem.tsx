/*--------------------------------------*
  src/components/list/RowItem.tsx
*---------------------------------------*/
import React from 'react';
import type { RecordItem } from '../../types';
import { formatDate } from '../../utils/dataFormat';

const RowItem: React.FC<{ item: RecordItem }> = ({ item }) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.category_id}</td>
    <td>{item.code}</td>
    <td>{item.name}</td>
    <td>{item.updated_by}</td>
    <td>{formatDate(item.created_at)}</td>
    <td>{formatDate(item.updated_at)}</td>
  </tr>
);

export default RowItem;