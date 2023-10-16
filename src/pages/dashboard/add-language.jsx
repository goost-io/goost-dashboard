import * as React from "react";
import Table from "@mui/joy/Table";
import AddLanguageModal from "../../../components/add-language/AddLangBtnModal";

function AddLanguage(name, code, status) {
    return {name, code, status};
}

const rows = [
    AddLanguage("Türkçe", "tr", "aktif"),
    AddLanguage("English", "en", "aktif"),
    AddLanguage("Deutsch", "de", "aktif"),
    AddLanguage("Italiano", "it", "aktif"),
    AddLanguage("Español", "es", "aktif"),
    AddLanguage("Français", "fr", "aktif"),
];

export default function TableColumnWidth() {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const buttonStyle = {
        height: "50px",
    };
    return (
        <>
            <div style={containerStyle}>
                <h1>Dil Ekleme Yöntemi</h1>
                <AddLanguageModal/>
            </div>

            <Table sx={{"& thead th:nth-child(1)": {width: "40%"}}}>
                <thead>
                <tr>
                    <th>Dil</th>
                    <th>Kodu</th>
                    <th>Aktif/Pasif</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.code}</td>
                        <td>{row.status}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
}
