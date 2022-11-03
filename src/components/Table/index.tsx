import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { DataType } from "../../Data/Data";

interface Props {
  columns: ColumnsType<DataType>;
  dataSource: readonly DataType[] | undefined;
}

export const TableComponent = (props: Props) => {
  const { columns, dataSource } = props;

  return (
    <div>
      <Table columns={columns} dataSource={dataSource}></Table>
    </div>
  );
};
