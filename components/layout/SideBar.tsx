import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import LanguageIcon from "@mui/icons-material/Language";

import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ColorSchemeToggle from "../dashboard/ColorSchemeToggle";
import { closeSidebar } from "../dashboard/utils";
import Link from "next/link";

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}>
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  return (
    <Sheet
      className='Sidebar'
      sx={{
        position: {
          xs: "fixed",
          md: "sticky",
        },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}>
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className='Sidebar-overlay'
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton variant='soft' color='primary' size='sm'>
          <BrightnessAutoRoundedIcon />
        </IconButton>
        <Link href='/dashboard'>
          <Typography level='title-lg'>Goost.io</Typography>
        </Link>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
      <Input
        size='sm'
        startDecorator={<SearchRoundedIcon />}
        placeholder='Search'
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}>
        <List
          size='sm'
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}>
          <ListItem>
            <ListItemButton>
              <HomeRoundedIcon />
              <ListItemContent>
                <Link href='/dashboard'>
                  <Typography level='title-sm'>Home</Typography>
                </Link>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected>
              <ShoppingCartRoundedIcon />
              <ListItemContent>
                <Typography level='title-sm'>Kategori Ekleme</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon />
                  <ListItemContent>
                    <Typography level='title-sm'>İçerik Yönetimi</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}>
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <Link href='/dashboard/content-single' passHref>
                    <ListItemButton>Tekli İçerik</ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='/dashboard/inner-content' passHref>
                    <ListItemButton>İç içe içerik</ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemButton>Bağlantılı içerik</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>İçerik Tipi Ekleme</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <LanguageIcon />
                  <ListItemContent>
                    <Typography level='title-sm'>Tanımlar</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}>
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <Link href='/dashboard/add-language' passHref>
                    <ListItemButton>Dil Ekleme Yönetimi </ListItemButton>
                  </Link>
                </ListItem>
                  <ListItem sx={{ mt: 0.5 }}>
                      <Link href='/dashboard/add-language' passHref>
                          <ListItemButton>İçerik Tipi Yönetimi</ListItemButton>
                      </Link>
                  </ListItem>
              </List>
            </Toggler>
          </ListItem>
            <ListItem>
                <ListItemButton selected>
                    <LocalOfferIcon />
                    <ListItemContent>
                        <Typography level='title-sm'>Teklifler</Typography>
                    </ListItemContent>
                </ListItemButton>
            </ListItem>
        </List>

        <List
          size='sm'
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}>
          <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Destek
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Ayarlar
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar
          variant='outlined'
          size='sm'
          src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level='title-sm'>Mehmet B.</Typography>
          <Typography level='body-xs'>mehmet.bozan@goost.io</Typography>
        </Box>
        <IconButton size='sm' variant='plain' color='neutral'>
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}
