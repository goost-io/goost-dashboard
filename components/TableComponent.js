import * as React from 'react';
import Table from '@mui/joy/Table';

export default function TableComponent({columns, data}) {
    return (
        <Table sx={{'& thead th:nth-child(1)': {width: '40%'}}}>
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column}>{row[column]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </Table>
    );
}
