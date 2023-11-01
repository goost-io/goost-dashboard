import * as React from 'react';
import Table from '@mui/joy/Table';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Button from "@mui/joy/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function TableComponent({columns, data}) {
    if (data === undefined || data.length === 0 || !Array.isArray(data)) {
        // return <p>Veri Bulunamadı</p>;
        return;
    }

    return (
        <Table sx={{'& thead th:nth-child(1)': {width: '10%'}}}>
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
                <th>actions</th>
            </tr>
            </thead>
            <tbody>

            {data.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column}>{row[column]}</td>
                    ))}
                    <td>
                        <div>
                            <Button size="sm" variant="plain" color="neutral"><VisibilityIcon/></Button>
                            <Button size="sm" variant="plain" color="warning"><Edit/></Button>
                            <Button size="sm" variant="soft" color="danger"><Delete/></Button>
                        </div>
                    </td>
                </tr>
            ))}

            </tbody>
        </Table>
    );
}
