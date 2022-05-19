/* eslint-disable key-spacing */
import { useEffect, useState } from 'react';
import { Table } from '../../ant-modules';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../hooks/useStore';

type TablaUsuariosType = {
  onClick: (param: any) => void;
};

export const TablaUsuarios = ({ onClick }: TablaUsuariosType) => {
  const [loader, setLoader] = useState(false);
  const [cols, setColumns] = useState<any[]>([]);
  const { users } = useAppSelector((state: RootState) => state.auth);

  const colsFilter = users.filter((item: any, index: any) => {
    return typeof Object.entries(item)[index][1] !== 'object';
  });

  const colsSelected = colsFilter.map((item: any, index: any) => {
    return {
      title: Object.keys(item)[index],
      dataIndex: Object.keys(item)[index],
      key: Object.keys(item)[index]
    };
  });

  useEffect(() => {
    setColumns(colsSelected);
    setLoader(true);
  }, [users]);

  return (
    <>
      {loader && (
        <Table
          onRow={(record) => ({
            onClick: () => onClick(record)
          })}
          rowClassName={(record, index) => (index % 2 === 0 ? 'table-row' : 'table-row table-row--imp')}
          columns={cols}
          dataSource={users}
        />
      )}
    </>
  );
};
