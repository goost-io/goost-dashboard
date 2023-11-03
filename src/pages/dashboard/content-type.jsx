import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import {useDispatch, useSelector} from "react-redux";
import TableComponent from "../../../components/TableComponent";
import {contentTypeList} from "@/redux/types/content-type/content-type.list";
import AddContentType from "../../../components/content-type/AddContentType";

export default function ContentSingle() {
    const columns = ['id', 'type', 'description'];
    const dispatch = useDispatch();
    const {contentTypes} = useSelector((state) => state.contentType);

    React.useEffect(() => {
        dispatch(contentTypeList());
    }, [contentTypes.length < 0]);

    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    return (
        <>
            <div style={containerStyle}>
                <h1>İçerik Tipleri</h1>
                <AddContentType/>
            </div>
            <Sheet
                variant='outlined'
                sx={{width: "100%", boxShadow: "sm", borderRadius: "sm"}}>
                {contentTypes.length === undefined ?
                    <p>Yükleniyor...</p>
                :
                <TableComponent columns={columns} data={contentTypes}/>
            }
            </Sheet>
        </>
    );
}
