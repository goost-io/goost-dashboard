import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import {useDispatch, useSelector} from "react-redux";
import TableComponent from "../../../components/TableComponent";
import {offerRequestList} from "@/redux/offer-request/offer-request.list";

export default function ContentSingle() {
    const columns = ['id', 'name', 'email', 'phone', 'message', 'type', 'createdAt', 'updatedAt'];
    const dispatch = useDispatch();
    const {offerRequests} = useSelector((state) => state.offerRequest);


    React.useEffect(() => {
        dispatch(offerRequestList());
    }, [offerRequests.length < 0]);

    const containerStyle = {
        display: "flex", justifyContent: "space-between", alignItems: "center",
    };

    return (<>
        <div style={containerStyle}>
            <h1>Teklifler</h1>
        </div>
        <Sheet
            variant='outlined'
            sx={{width: "100%", boxShadow: "sm", borderRadius: "sm"}}>
            <TableComponent columns={columns} data={offerRequests}/>
        </Sheet>
    </>);
}
