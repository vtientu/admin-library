"use client";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Link,
  Avatar,
  Typography,
  OutlinedInput,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
  Card,
  Rating,
  TextField,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { relative } from "path";
import { ArrowBackIosNew } from "@mui/icons-material";
import { red } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0078D4",
      dark: "#0063C6",
    },
    secondary: {
      main: "#F0F0F0",
      light: "#FAFAFA",
    },
    text: {
      secondary: "#243648",
      disabled: "#999999",
    },
    info: {
      "500": "#50BFA5",
    },
    background: {
      paper: "#FFF5E9",
    },
  },
});

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

const categories = [
  {
    name: "Sách điện tử",
    link: "/e-books",
    color: "rgba(255, 114, 127, 0.10)",
    icon: "./images/ipad 1.svg",
  },
  {
    name: "Sách giấy",
    link: "/books",
    color: "#EAF7ED",
    icon: "./images/book 1.svg",
  },
  {
    name: "Sách nói",
    link: "/audiobooks",
    color: "#FFF9E9",
    icon: "./images/Sách nói.svg",
  },
  {
    name: "Bài giảng điện tử",
    link: "/lectures",
    color: "#EDF1F8",
    icon: "./images/e-learning-monitor 1.svg",
  },
  {
    name: "Video",
    link: "/videos",
    color: "#F5EDFF",
    icon: "./images/Video, ảnh.svg",
  },
  {
    name: "Album ảnh",
    link: "/albums",
    color: "rgba(255, 114, 127, 0.10)",
    icon: "./images/Library 1.svg",
  },
];

const booksHistory = [
  {
    name: "Ngữ văn lớp 8 - tập 2",
    image: "/images/Rectangle 5158.png",
    rate: 5,
    view: "200",
    category: "Sách giáo khoa",
    fee: true,
  },
  {
    name: "Công nghệ trồng trọt",
    image: "/images/Rectangle 5159.png",
    rate: 5,
    view: "150",
    category: "Sách giáo khoa",
    fee: false,
  },
  {
    name: "Lịch sử lớp 11",
    image: "/images/Rectangle 5160.png",
    rate: 4,
    view: "98",
    category: "Sách giáo khoa",
    fee: true,
  },
  {
    name: "Toán lớp 2",
    image: "/images/Rectangle 5157.png",
    rate: 4,
    view: "29",
    category: "Sách giáo khoa",
    fee: true,
  },
];

const booksRead = [
  {
    name: "Địa lý lớp 11",
    image: "/images/Rectangle 5154.png",
    rate: 5,
    view: "20k",
    category: "Sách giáo khoa",
    fee: true,
  },
  {
    name: "Địa lý lớp 10",
    image: "/images/Rectangle 5155.png",
    rate: 5,
    view: "669",
    category: "Sách giáo khoa",
    fee: false,
  },
  {
    name: "Toán lớp 11",
    image: "/images/Rectangle 5156.png",
    rate: 5,
    view: "601",
    category: "Sách giáo khoa",
    fee: true,
  },
  {
    name: "Hoạt động trải nghiệm 1",
    image: "/images/Rectangle 5157.png",
    rate: 4,
    view: "369",
    category: "Sách giáo khoa",
    fee: true,
  },
];

const news = [
  {
    name: "Khám phá thiên đường Bảo Sơn cùng lớp 12A1",
    image: "/images/Rectangle 5166.png",
    date: "Ngày 22 tháng 07 năm 2023",
    author: "Admin",
  },
  {
    name: "Đồng phục mới của khối lớp 10, 11, 12 năm 2023",
    image: "/images/Rectangle 5167.png",
    date: "Ngày 22 tháng 07 năm 2023",
    author: "Lan Ngọc",
  },

  {
    name: "Khai giảng năm học mới 2023-2024",
    image: "/images/Rectangle 5168.png",
    date: "Ngày 22 tháng 07 năm 2023",
    author: "Quốc Minh",
  },

  {
    name: "Hoạt động ngoại khóa của lớp 10A2, chuyên Nguyễn Tất Thành mùa hè 2023",
    image: "/images/Rectangle 5169.png",
    date: "Ngày 22 tháng 07 năm 2023",
    author: "Lan Ngoc",
  },
];

export default function Home() {
  const pathName = usePathname();
  return (
    <ThemeProvider theme={theme}>
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
          <Box
            display={"flex"}
            gap={6}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
          >
            {navbars.map((navbar, index) => (
              <Link
                key={index}
                href={navbar.link}
                underline={"none"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                height={"100%"}
                fontSize={16}
                color={theme.palette.text.secondary}
                sx={
                  pathName === navbar.link
                    ? { borderBottom: "5px solid", fontWeight: 700 }
                    : null
                }
              >
                {navbar.name}
              </Link>
            ))}
          </Box>
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
                borderColor: theme.palette.text.secondary,
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
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"2440px"}
        mx={"auto"}
      >
        <Box bgcolor={theme.palette.background.paper}>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            width={"85%"}
            mx={"auto"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              flex={1}
              p={15}
              gap={3}
            >
              <Box sx={{ position: "relative", zIndex: 2 }}>
                <Typography fontSize={32} fontWeight={600} lineHeight={"130%"}>
                  Nghệ thuật đọc sách là nghệ thuật tư duy với ít nhiều sự giúp
                  đỡ của người khác.
                </Typography>
                <Image
                  src="./images/Vector 1.svg"
                  alt="Icon"
                  width={245}
                  height={22}
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "-5%",
                    zIndex: -1,
                    opacity: 0.8,
                  }}
                />
              </Box>

              <Button
                variant="outlined"
                sx={{
                  fontSize: "18px",
                  borderRadius: "100px",
                  border: "1px solid",
                  borderColor: theme.palette.text.secondary,
                  color: theme.palette.text.secondary,
                  width: "30%",
                  whiteSpace: "nowrap",
                  p: 1,
                  "&:hover": {
                    borderColor: theme.palette.text.secondary,
                  },
                }}
              >
                Xem thêm <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Box>
            <Box
              display={"flex"}
              flex={1}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src={"/images/Rectangle 5207.png"}
                  alt="Book"
                  width={250}
                  height={342}
                  style={{ zIndex: 2, position: "relative" }}
                />
                <Image
                  src={"/images/Rectangle 5206.png"}
                  alt="Book"
                  width={216}
                  height={292}
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "-50%",
                    zIndex: 1,
                  }}
                />
                <Image
                  src={"/images/Rectangle 5205.png"}
                  alt="Book"
                  width={216}
                  height={292}
                  style={{
                    position: "absolute",
                    top: "5%",
                    left: "-50%",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          my={10}
          justifyContent={"space-between"}
          gap={20}
          alignItems={"center"}
          width={"85%"}
          mx={"auto"}
        >
          <Typography
            fontSize={24}
            fontWeight={600}
            whiteSpace={{
              lg: "nowrap",
            }}
          >
            Danh mục tài liệu
          </Typography>
          <Box
            display={"flex"}
            flex={1}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                  color: "#333",
                  "&:hover": {
                    bgcolor: "#fff",
                  },
                }}
              >
                <Avatar
                  sx={{
                    p: 5,
                    bgcolor: category.color,
                    justifyContent: "center",
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    layout="responsive"
                    src={category.icon}
                    alt="Book"
                    width={40}
                    height={40}
                    style={{ backgroundColor: category.color }}
                  />
                </Avatar>
                <Typography
                  fontWeight={400}
                  fontSize={20}
                  mt={3}
                  whiteSpace={"nowrap"}
                >
                  {category.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
        <Box bgcolor={theme.palette.secondary.light} width={"100%"}>
          <Box display={"flex"} gap={10} my={10} flexDirection={"column"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"85%"}
              mx={"auto"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography fontSize={24} fontWeight={600}>
                  Sách đọc nhiều nhất
                </Typography>
                <Link
                  textAlign={"right"}
                  fontWeight={400}
                  underline="none"
                  color={theme.palette.text.secondary}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Xem tất cả <KeyboardDoubleArrowRightIcon color="success" />
                </Link>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mt={3}
                gap={5}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  px={6}
                  pt={8}
                  pb={6}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={theme.palette.info.main}
                  borderRadius={5}
                >
                  <Image
                    src={"/images/xxx 2.png"}
                    alt="Book"
                    width={250}
                    height={200}
                  />
                  <Typography
                    color={theme.palette.secondary.light}
                    textAlign={"center"}
                    fontSize={20}
                    fontWeight={600}
                    maxWidth={250}
                    mt={6}
                    mb={5}
                  >
                    Sách đang được đọc nhiều nhất
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "80%",
                      whiteSpace: "none",
                      borderRadius: "100px",
                      borderColor: "#fff",
                      color: "#fff",
                      "&:hover": {
                        borderColor: "#fff",
                      },
                    }}
                  >
                    Xem ngay <ArrowForwardIosIcon fontSize="small" />
                  </Button>
                </Box>
                <Grid container sx={{ position: "relative" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#fff",
                      position: "absolute",
                      top: "25%",
                      left: 0,
                      zIndex: 1,
                      border: "0.932px solid var(--button-boder, #DBDBDB)",
                      borderRadius: "100px",
                      color: "#333",
                      "&:hover": {
                        bgcolor: "#fff",
                      },
                    }}
                  >
                    <ArrowBackIosNew width={"100%"} sx={{ m: 0, p: 0 }} />
                  </Button>
                  {booksRead.map((book, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      md={6}
                      lg={3}
                      mb={5}
                      p={2}
                      sx={{ position: "relative" }}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                      height={"85%"}
                    >
                      <Image
                        src={book.image}
                        alt={book.name}
                        width={240}
                        height={340}
                        layout="responsive"
                      />
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={2}
                        mt={2}
                      >
                        <Box display={"flex"} flexDirection={"column"}>
                          <Typography fontWeight={400}>{book.name}</Typography>
                          <Typography fontSize={12} color={"#999999"}>
                            {book.name} - {book.category}
                          </Typography>
                        </Box>
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          flexWrap={{ sm: "wrap", xl: "nowrap" }}
                        >
                          <Box display={"flex"}>
                            <Rating
                              name="read-only"
                              value={book.rate}
                              readOnly
                              size="small"
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="small"
                                />
                              }
                            />
                          </Box>
                          <Typography
                            fontSize={14}
                            textAlign={"right"}
                            whiteSpace={{ xl: "nowrap" }}
                          >
                            {book.view} lượt xem
                          </Typography>
                        </Box>
                      </Box>
                      {book.fee && (
                        <Image
                          src="./images/Group 57676.svg"
                          alt="Tinh Phi"
                          width={32}
                          height={32}
                          style={{
                            position: "absolute",
                            top: "5%",
                            right: "15%",
                          }}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"85%"}
              mx={"auto"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography fontSize={24} fontWeight={600}>
                  Sách thêm gần đây
                </Typography>
                <Link
                  textAlign={"right"}
                  fontWeight={400}
                  underline="none"
                  color={theme.palette.text.secondary}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Xem tất cả <KeyboardDoubleArrowRightIcon color="success" />
                </Link>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mt={3}
                gap={5}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  px={6}
                  pt={8}
                  pb={6}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"#F7CC7F"}
                  borderRadius={5}
                >
                  <Image
                    src={"/images/yyy 1.png"}
                    alt="Book"
                    width={250}
                    height={200}
                  />
                  <Typography
                    color={theme.palette.secondary.light}
                    textAlign={"center"}
                    fontSize={20}
                    fontWeight={600}
                    mt={6}
                    mb={5}
                    maxWidth={250}
                  >
                    Những tài liệu đã được thêm mới gần đây
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "80%",
                      whiteSpace: "none",
                      borderRadius: "100px",
                      borderColor: "#fff",
                      color: "#fff",
                      "&:hover": {
                        borderColor: "#fff",
                      },
                    }}
                  >
                    Xem ngay <ArrowForwardIosIcon fontSize="small" />
                  </Button>
                </Box>
                <Grid container>
                  {booksHistory.map((book, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      md={6}
                      lg={3}
                      mb={5}
                      p={2}
                      sx={{ position: "relative" }}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                      height={"85%"}
                    >
                      <Image
                        src={book.image}
                        alt={book.name}
                        width={240}
                        height={340}
                        layout="responsive"
                      />
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={2}
                        mt={2}
                        flex={1}
                        justifyContent={"flex-end"}
                      >
                        <Box display={"flex"} flexDirection={"column"}>
                          <Typography fontWeight={400}>{book.name}</Typography>
                          <Typography fontSize={12} color={"#999999"}>
                            {book.name} - {book.category}
                          </Typography>
                        </Box>
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          flexWrap={{ sm: "wrap", xl: "nowrap" }}
                        >
                          <Box display={"flex"}>
                            <Rating
                              name="read-only"
                              value={book.rate}
                              readOnly
                              size="small"
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="small"
                                />
                              }
                            />
                          </Box>
                          <Typography fontSize={14} textAlign={"right"}>
                            {book.view} lượt xem
                          </Typography>
                        </Box>
                      </Box>
                      {book.fee && (
                        <Image
                          src="./images/Group 57676.svg"
                          alt="Tinh Phi"
                          width={32}
                          height={32}
                          style={{
                            position: "absolute",
                            top: "5%",
                            right: "15%",
                          }}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} gap={10} my={10} flexDirection={"column"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"85%"}
            mx={"auto"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography fontSize={24} fontWeight={600}>
                Tài liệu nổi bật
              </Typography>
              <Link
                textAlign={"right"}
                fontWeight={400}
                underline="none"
                color={theme.palette.text.secondary}
                display={"flex"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                }}
                gap={1}
              >
                Xem tất cả <KeyboardDoubleArrowRightIcon color="success" />
              </Link>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              mt={3}
              gap={3}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={1}
                justifyContent={"space-around"}
                alignItems={"center"}
                borderRadius={2}
                bgcolor={theme.palette.secondary.light}
                p={1}
                sx={{ borderRadius: "20px" }}
              >
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    fullWidth
                    sx={{
                      textTransform: "none",
                      borderRadius: "5px",
                      color: "#333",
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: 2,
                      py: 1.5,
                      px: 3,
                      "&:hover": {
                        bgcolor: "#16AD5B",
                        color: "#fff",
                      },
                    }}
                  >
                    <Image
                      src={category.icon}
                      alt="Book"
                      width={25}
                      height={25}
                      color="#fff"
                    />
                    <Typography
                      fontWeight={400}
                      fontSize={16}
                      whiteSpace={"nowrap"}
                    >
                      {category.name}
                    </Typography>
                  </Button>
                ))}
              </Box>
              <Grid container alignContent={"stretch"}>
                <Grid item xs={3} mb={3} sx={{ position: "relative" }}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                  <Image
                    src="./images/Group 57676.svg"
                    alt="Tinh Phi"
                    width={32}
                    height={32}
                    style={{
                      position: "absolute",
                      top: "8%",
                      right: "5%",
                    }}
                  />
                </Grid>
                <Grid item xs={3} mb={3}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={3} mb={3}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={3} mb={3}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={3} mb={3}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={3} mb={3}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={3} mb={3}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={3} mb={3}>
                  <Card sx={{ m: 1, p: 2, bgcolor: "#fff" }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <audio
                        controls
                        controlsList="nodownload noplaybackrate"
                        style={{ width: "100%" }}
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                          type="audio/mpeg"
                        ></source>
                      </audio>
                      <Box>
                        <Typography fontWeight={400}>
                          Audio: title cân được 2 dòng, dài quá 66 ký tự thì
                          dùng ...
                        </Typography>
                        <Typography fontSize={12} color={"#999999"}>
                          Tiếng Việt 1 - Tập 1 - Kết nối tri thức với cuộc sống
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box display={"flex"}>
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                        <StarIcon color="warning" fontSize="small" />
                      </Box>
                      <Typography fontSize={14} textAlign={"right"}>
                        200 lượt xem
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"85%"}
            mx={"auto"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography fontSize={24} fontWeight={600}>
                Tin tức
              </Typography>
              <Link
                textAlign={"right"}
                fontWeight={400}
                underline="none"
                color={theme.palette.text.secondary}
                display={"flex"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                }}
                gap={1}
              >
                Xem tất cả <KeyboardDoubleArrowRightIcon color="success" />
              </Link>
            </Box>

            <Grid container>
              {news.map((news, index) => (
                <Grid key={index} item xs={3} p={1}>
                  <Image
                    src={news.image}
                    alt={news.name}
                    width={384}
                    height={260}
                    layout="responsive"
                  />
                  <Typography fontSize={12} fontWeight={400}>
                    {news.date} | By {news.author}
                  </Typography>
                  <Typography fontWeight={700} fontSize={16}>
                    {news.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
