import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";
import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import { Grid } from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ContentSingle() {
  return (
    <div style={{ padding: "16px" }}>
      <Box
        component='main'
        className='MainContent'
        sx={{
          px: {
            xs: 2,
            md: 6,
          },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
        }}>
        <Box
          sx={{
            display: "flex",
            my: 1,
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "start", sm: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
          <Typography level='h2'>Tekli İçerik Yönetimi</Typography>
          <Button
            color='primary'
            startDecorator={<AddToQueueRoundedIcon />}
            size='sm'>
            Yeni İçerik Ekleme
          </Button>
          <Sheet
            sx={{
              display: { xs: "none", sm: "initial" },
              width: "100%",
              borderRadius: "sm",
              flexShrink: 1,
              overflow: "auto",
              minHeight: 0,
            }}>
            <Table
              borderAxis='yBetween'
              color='neutral'
              size='md'
              stickyFooter={false}
              stickyHeader
              variant='outlined'>
              <thead>
                <tr>
                  <th>Başlık</th>
                  <th style={{ width: "40%" }}>Detay</th>
                  <th>Kod</th>
                  <th>Dil&nbsp;(g)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>About</td>
                  <td>Lorem ipsum lorem ipsum</td>
                  <td>about</td>
                  <td>EN</td>
                  <td>
                    <Grid container spacing={2}>
                      <Grid>
                        <IconButton variant='soft' color={"warning"}>
                          <EditIcon />
                        </IconButton>
                      </Grid>
                      <Grid>
                        <IconButton variant='soft' color={"danger"}>
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </td>
                </tr>
                <tr>
                  <td>Hakkımızda</td>
                  <td>Bu şirketimizin hakkımızda detayıdır</td>
                  <td>about</td>
                  <td>TR</td>
                  <td>
                    <Grid container spacing={2}>
                      <Grid>
                        <IconButton variant='soft' color={"warning"}>
                          <EditIcon />
                        </IconButton>
                      </Grid>
                      <Grid>
                        <IconButton variant='soft' color={"danger"}>
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Sheet>
        </Box>
      </Box>
    </div>
  );
}
