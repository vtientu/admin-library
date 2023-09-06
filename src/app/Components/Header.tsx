import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import theme from "../styles/theme";

const navbars = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Tài liệu",
    link: "/documents",
  },
  {
    name: "Giới thiệu",
    link: "/about",
  },
  {
    name: "Tin tức",
    link: "/news",
  },
];

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "auto",
          width: "85%",
        }}
        maxWidth={"2440px"}
      >
        <Box display={"flex"} gap={8} alignItems={"center"}>
          <Image src={"./images/Logo.svg"} alt="Logo" width={64} height={64} />
          <Tabs
            variant="fullWidth"
            scrollButtons
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            textColor="inherit"
            sx={{
              ".MuiTabs-indicator": {
                width: "5% !important",
                marginLeft: "10%",
                borderRadius: "10px",
                bgcolor: theme.palette.background.default,
              },

              "& .MuiTab-root.Mui-selected": {
                fontWeight: 700,
              },
              " .MuiTab-root": {
                color: theme.palette.text.secondary,
                fontWeight: 400,
              },
            }}
          >
            {navbars.map((navbar, index) => (
              <Tab
                label={navbar.name}
                // href={navbar.link}
                // color={Theme.palette.text.secondary}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  color: theme.palette.text.secondary,
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Box display={"flex"} gap={2}>
          <TextField
            autoFocus
            placeholder={"Tìm kiếm"}
            InputProps={{
              startAdornment: <BsSearch style={{ padding: "8px" }} />,
              sx: {
                borderRadius: "20px",
              },
            }}
            color="secondary"
            sx={{
              borderRadius: "100px",
              my: 1,
              width: {
                sm: "200px",
                md: "300px",
                lg: "500px",
                xl: "550px",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                // borderColor: "#333",
              },
            }}
            size="small"
          />
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: "100px",
              whiteSpace: "nowrap",
              px: 3,
              my: 1,
              borderColor: theme.palette.text.secondary,
              color: theme.palette.text.secondary,
              "&:focus": {
                borderColor: "#333",
              },
              "&:hover": {
                borderColor: theme.palette.text.secondary,
              },
            }}
          >
            Đăng Nhập
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
