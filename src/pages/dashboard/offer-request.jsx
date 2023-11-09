import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../../components/TableComponent";
import { offerRequestList } from "@/redux/offer-request/offer-request.list";
import { toast } from "react-toastify";

export default function ContentSingle() {
  const listColumns = ["id", "name", "email"];
  const showColumns = [
    "id",
    "name",
    "email",
    "phoneNumber",
    "businessName",
    "businessScale",
    "website",
    "type",
    "price",
    "accept-terms",
    "createdAt",
    "updatedAt",
  ];
  const dispatch = useDispatch();
  const { offerRequests } = useSelector((state) => state.offerRequest);

  React.useEffect(() => {
    dispatch(offerRequestList());
  }, [offerRequests.length < 0]);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const handleEdit = (editedData) => {
    toast.success("İçerik Güncellendi");
  };

  const handleDelete = (id) => {
    toast.success("İçerik Silindi");
  };

  return (
    <>
      <div style={containerStyle}>
        <h1>Teklifler</h1>
      </div>
      <Sheet
        variant='outlined'
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}>
        <TableComponent
          listColumns={listColumns}
          showColumns={showColumns}
          data={offerRequests}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Sheet>
    </>
  );
}
