import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
import AddContentSingleModal from "../../../components/content-single/AddContentSingleModal";
import {useDispatch, useSelector} from "react-redux";
import { singleContentList } from "../../redux/single-content/content.list";
import TableComponent from "../../../components/TableComponent";
import {useState} from "react";
import {axiosInstance} from "@/redux/axios.instance";

export default function ContentSingle() {
  const columns = ['id', 'title', 'type', 'content', 'language'];
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

  return (
    <>
      <div style={containerStyle}>
        <h1>İçerik</h1>
        <AddContentSingleModal />
      </div>
      <Sheet
        variant='outlined'
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}>
        <TableComponent columns={columns} data={contents} />
      </Sheet>
    </>
  );
}
