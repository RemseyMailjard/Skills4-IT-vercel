import { CustomLink, CustomLoadingButton } from "@/components/common";
import {
  Box,
  Slide,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Trainings & courses",
    path: "/training-courses",
  },
  {
    name: "Knowledge base",
    path: "/knowledge-base",
  },
  
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Online Learning Environment",
    path: "https://skills4it.talentlms.com/",
  },
];

export default function IndexLayoutHeader(props: any) {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  function HideOnScroll(props: any) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <HideOnScroll {...props}>
      <Box component="header" className="layout-header">
        <Box className="header-main">
          <Link className="logo_text" href="/">
            Skills<Box component="span">4-</Box>IT
          </Link>
          <Box className="flex flex-1 max-lg:w-full max-xl:flex-auto items-center justify-between">
            <Box
              component="nav"
              className="md:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:border-l md:border-gray-400	 items-center text-base justify-center text-nowrap hidden lg:flex"
            >
              {navlinks.map((item, index) => (
                <CustomLink
                  key={index}
                  className="mr-5 hover:text-gray-900"
                  href={item.path}
                >
                  {item.name}
                </CustomLink>
              ))}
            </Box>
            <Box className="lg:hidden">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer}
              >
                <Menu />
              </IconButton>
              <Drawer open={openDrawer} onClose={toggleDrawer} keepMounted>
                <Box className="logo_text p-4">
                  Skills<Box component="span">4-</Box>IT
                </Box>

                <List>
                  {navlinks.map((item, index) => (
                    <ListItem
                      className="cursor-pointer"
                      key={index}
                      onClick={() => {
                        router.push(item.path);
                        toggleDrawer();
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>

                <Box className="p-4">
                  <CustomLoadingButton
                    className="w-full"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </CustomLoadingButton>
                </Box>
              </Drawer>
            </Box>
            <CustomLoadingButton onClick={() => router.push("/login")}>
              Login
            </CustomLoadingButton>
          </Box>
        </Box>
      </Box>
    </HideOnScroll>
  );
}
