import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Avatar from "@mui/joy/Avatar";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";

export default function ContentSingle() {
  return (
    <div style={{ padding: "16px" }}>
      <Typography variant='h4' gutterBottom>
        Content Single Page
      </Typography>
      <Avatar
        alt='User Avatar'
        src='https://via.placeholder.com/150'
        sx={{ width: 150, height: 150, marginBottom: 2 }}
      />
      <Typography variant='body1' paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        consectetur lectus nec ligula scelerisque, nec rhoncus arcu ullamcorper.
        Integer vel massa eu risus consectetur tincidunt. Ut pellentesque neque
        in facilisis iaculis.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        style={{ marginRight: "16px" }}>
        Primary Button
      </Button>
      <Button variant='outlined' color='primary'>
        Outlined Button
      </Button>
      <Divider style={{ margin: "16px 0" }} />
      <Chip
        label='Tag 1'
        color='primary'
        style={{ marginRight: "8px", marginBottom: "8px" }}
      />
      <Chip
        label='Tag 2'
        color='secondary'
        style={{ marginRight: "8px", marginBottom: "8px" }}
      />
      <Chip
        label='Tag 3'
        color='primary'
        style={{ marginRight: "8px", marginBottom: "8px" }}
      />
    </div>
  );
}
