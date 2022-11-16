import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
// import "../../styles/Footer.css";
export default function Footer() {
  return (
    <footer
    // style={{
    //   position: "fixed",
    //   bottom: 250,
    // }}
    >
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        // bgcolor="text.secondary"
        style={{ background: "black" }}
        color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link
                  style={{ textDecoration: "none" }}
                  href="https://www.apple.com/contact/"
                  color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none" }}
                  href="https://mail.google.com/"
                  color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none" }}
                  href="https://www.apple.com/privacy/"
                  color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link
                  style={{ textDecoration: "none" }}
                  href="/login"
                  color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none" }}
                  href="/register"
                  color="inherit">
                  Register
                </Link>
              </Box>
              <Box>
                <Link
                  style={{ textDecoration: "none" }}
                  href="/paid"
                  color="inherit">
                  Pay
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="https://www.instagram.com/" color="inherit">
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="https://web.whatsapp.com/" color="inherit">
                  WhatsApp
                </Link>
              </Box>
              <Box>
                <Link href="https://web.telegram.org/" color="inherit">
                  Telegram
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            © AIZHAMAL AND JAMILYA ALL RIGHTS RESERVED
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
