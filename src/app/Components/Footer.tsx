import { ArrowForward, KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import theme from "../styles/theme";
const Footer = () => {
  return (
    <div>
      <Box sx={{ bgcolor: theme.palette.text.secondary }}>
        <Box
          width={"85%"}
          mx={"auto"}
          display={"flex"}
          justifyContent={"space-between"}
          pb={4}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"start"}
            gap={3}
            mt={8}
          >
            <Image
              src={"./images/Logo.svg"}
              alt="Logo"
              width={64}
              height={64}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box
                display={"inline-flex"}
                color={theme.palette.secondary.light}
                fontWeight={400}
                alignItems={"center"}
              >
                Hỗ trợ kỹ thuật:
                <Typography
                  color={theme.palette.background.default}
                  fontSize={20}
                  fontWeight={700}
                  ml={1}
                >
                  0888 999 999
                </Typography>
              </Box>
              <Box
                display={"inline-flex"}
                color={theme.palette.secondary.light}
                fontWeight={400}
                alignItems={"center"}
              >
                Góp ý khiếu nại:
                <Typography
                  color={theme.palette.background.default}
                  fontSize={20}
                  fontWeight={700}
                  ml={1}
                >
                  0888 666 999
                </Typography>
              </Box>
              <Box
                display={"inline-flex"}
                color={theme.palette.secondary.light}
                fontWeight={400}
                alignItems={"center"}
              >
                Email:
                <Typography
                  color={theme.palette.background.default}
                  fontSize={20}
                  fontWeight={700}
                  ml={1}
                >
                  hotro@quangich.com
                </Typography>
              </Box>
              <Image
                src={"/images/image 14.png"}
                alt="confirm"
                width={130}
                height={52}
                style={{ marginTop: 35 }}
              />
            </Box>
          </Box>
          <Box
            mt={10}
            gap={3}
            display={"flex"}
            flexDirection={"column"}
            color={theme.palette.secondary.light}
          >
            <Typography fontWeight={700}>Tài liệu</Typography>
            <Typography fontWeight={400}>5 phẩm chất</Typography>
            <Typography fontWeight={400}>10 năng lực</Typography>
            <Typography fontWeight={400}>Sách theo lớp học</Typography>
            <Typography fontWeight={400}>Sách giáo khoa</Typography>
            <Typography fontWeight={400}>Sách tham khảo</Typography>
          </Box>
          <Box
            mt={10}
            gap={3}
            display={"flex"}
            flexDirection={"column"}
            color={theme.palette.secondary.light}
          >
            <Typography fontWeight={700}>Điều khoản sử dụng</Typography>
            <Typography fontWeight={400}>Chính sách bảo mật</Typography>
            <Typography fontWeight={400}>Điều khoản khi mượn sách</Typography>
            <Typography fontWeight={400}>Điều khoản đổi sách</Typography>
            <Typography fontWeight={400}>Khách hàng thân quen</Typography>
            <Typography fontWeight={400}>Chương trình Affiliate</Typography>
          </Box>
          <Box
            mt={10}
            gap={3}
            display={"flex"}
            flexDirection={"column"}
            color={theme.palette.secondary.light}
          >
            <Typography fontWeight={700}>Hỗ trợ</Typography>
            <Typography fontWeight={400}>Giới thiệu</Typography>
            <Typography fontWeight={400}>Câu hỏi thường gặp</Typography>
            <Typography fontWeight={400}>Hướng dẫn sử dụng</Typography>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            maxWidth={410}
            mt={10}
          >
            <Typography
              fontSize={14}
              color={"white"}
              fontWeight={400}
              lineHeight={"150%"}
            >
              “Thế giới vô cùng vĩ đại. Cặp mắt của bạn chỉ thấy được một phần
              nhỏ bé không đáng kể. Bởi vậy bạn hãy tìm lấy các sự kiện ở trong
              sách. Hãy tích lũy đều đặn hàng ngày các sự kiện ấy”. (V.Ôbrưsép)
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography
                fontSize={20}
                fontWeight={700}
                color={theme.palette.secondary.light}
              >
                eNetViet - kết nối gia đình nhà trường
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  fontSize: "14px",
                  textTransform: "none",
                  borderRadius: 60,
                }}
              >
                Tải xuống eNetViet{" "}
                <ArrowForward fontSize="small" style={{ marginLeft: 10 }} />
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={3}
              color={theme.palette.secondary.light}
            >
              <Typography
                fontSize={14}
                fontWeight={700}
                sx={{ textTransform: "uppercase" }}
              >
                KẾT NỐI VỚI QUẢNG ÍCH
              </Typography>
              <Box display={"flex"} gap={2}>
                <Image
                  src={"./images/Icon Facebook.svg"}
                  alt="icon Facebook"
                  width={40}
                  height={40}
                />
                <Image
                  src={"./images/Icon Tiktok.svg"}
                  alt="icon Tiktok"
                  width={40}
                  height={40}
                />
                <Image
                  src={"./images/Icon Zalo.svg"}
                  alt="icon Zalo"
                  width={40}
                  height={40}
                />
                <Image
                  src={"./images/Icon Youtube.svg"}
                  alt="icon Youtube"
                  width={40}
                  height={40}
                />
                <Image
                  src={"./images/Icon Instagram.svg"}
                  alt="icon Instagram"
                  width={40}
                  height={40}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          borderTop={"1px solid #C6C6C6"}
          py={3}
          display={"flex"}
          justifyContent={"space-between"}
          width={"85%"}
          mx={"auto"}
        >
          <Typography color={"#DBDBDB"} fontWeight={400}>
            Copyright © 2023 Quảng Ích. All rights reserved.
          </Typography>
          <Box display={"flex"} gap={1} color={"white"}>
            <Image
              src={"./images/Group 71.svg"}
              alt="icon"
              width={20}
              height={20}
            />
            <Typography>Việt Name</Typography>
            <KeyboardArrowDown />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
