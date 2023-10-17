import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import {useDispatch, useSelector} from "react-redux";
import TableComponent from "../../../components/TableComponent";
import AddLanguageModal from "../../../components/language/AddLangBtnModal";
import {languageList} from "@/redux/types/language/language.list";

export default function ContentSingle() {
    const columns = ['id', 'type', 'name'];
    const dispatch = useDispatch();
    const {languages} = useSelector((state) => state.language);

    React.useEffect(() => {
        dispatch(languageList());
    }, [languages.length < 0]);

    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    return (
        <>
            <div style={containerStyle}>
                <h1>Dil Tipleri</h1>
                <AddLanguageModal/>
            </div>
            <Sheet
                variant='outlined'
                sx={{width: "100%", boxShadow: "sm", borderRadius: "sm"}}>
                <TableComponent columns={columns} data={languages}/>
            </Sheet>
        </>
    );
}
