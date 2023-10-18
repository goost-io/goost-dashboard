import React from "react";
import Header from "./header";
import SideBar from "./sideBar";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import {useTheme} from "@mui/joy/styles";

export default function Layout({children}) {
    const theme = useTheme();

    return (
        <>
            <CssBaseline/>
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    [theme.breakpoints.down("sm")]: {
                        flexDirection: "column",
                    },
                }}>
                <Header/>
                <Box
                    sx={{
                        width: "var(--SideBar-width)",
                        flexShrink: 0,
                    }}>
                    <SideBar/>
                </Box>
                <Box
                    component='main'
                    className='MainContent'
                    sx={{
                        px: {xs: 2, md: 6},
                        pt: {
                            xs: "calc(12px + var(--Header-height))",
                            sm: "calc(12px + var(--Header-height))",
                            md: 3,
                        },
                        pb: {xs: 2, sm: 2, md: 3},
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 0,
                        height: "100%",
                        gap: 1,
                    }}>
                    {children}
                </Box>
            </Box>
        </>
    );
}
