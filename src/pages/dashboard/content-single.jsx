import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import AddContentSingleModal from "../../../components/content-single/AddContentSingleModal";
import {useDispatch, useSelector} from "react-redux";
import {singleContentList} from "../../redux/single-content/content.list";
import TableComponent from "../../../components/TableComponent";
import {singleContentUpdate} from "@/redux/single-content/content.update";
import {singleContentDelete} from "@/redux/single-content/content.delete";

export default function ContentSingle() {
    const listColumns= ['id', 'type', 'language'];
    const showColumns = ['id', 'title', 'language', 'content', 'type'];
    const dispatch = useDispatch();
    const {contents} = useSelector((state) => state.singleContent);


    React.useEffect(() => {
        dispatch(singleContentList());
    }, [contents.length < 0]);

    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const handleEdit = (editedData) => {
        dispatch(singleContentUpdate(editedData));
    }

    const handleDelete = (id) => {
        dispatch(singleContentDelete(id))
    }

    return (
        <>
            <div style={containerStyle}>
                <h1>İçerik</h1>
                <AddContentSingleModal/>
            </div>
            <div>
            {contents.length === undefined ? <p>Yükleniyor...</p> : (
                <Sheet
                    variant='outlined'
                    sx={{width: "100%", boxShadow: "sm", borderRadius: "sm"}}>
                    <TableComponent listColumns={listColumns} showColumns={showColumns} data={contents} handleEdit={handleEdit} handleDelete={handleDelete}/>
                </Sheet>
            )}
            </div>
        </>
    );
}
