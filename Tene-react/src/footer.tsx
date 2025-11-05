import { Box, Container, Grid, Typography, Link } from "@mui/material"
import { Phone, Email, LocationOn } from "@mui/icons-material"

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#2d2d2d", color: "white", pt: 6, pb: 3 }} dir="rtl">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ pr: { md: 3 } }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#a8d5d5" }}>
                ט.נ.א הובלות
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6, mb: 2 }}>
                חברת הובלות ישראלית המתמחה בשירות מקצועי, אמין ואישי. אנו מעניקים שירות מלא לכל סוגי ההובלות בכל רחבי
                הארץ.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "#a8d5d5" }}>
                הובלה בשקט ובביטחון
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}
            sx={{ px: { md: 3 }, borderLeft: { md: "1px solid #444" }, borderRight: { md: "1px solid #444" } }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, color: "#a8d5d5" }}>
              צור קשר
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ ml: 2, color: "#a8d5d5" }} />
                <Box>
                  <Link href="tel:055-295-7353" color="inherit" underline="none">
                    <Typography variant="body2">055-295-7353</Typography>
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ ml: 2, color: "#a8d5d5" }} />
                <Box>
                  <Link href="mailto:hovalotin@gmail.com" color="inherit" underline="none">
                    <Typography variant="body2">hovalotin@gmail.com</Typography>
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOn sx={{ ml: 2, color: "#a8d5d5" }} />
                <Typography variant="body2">בני ברק, ישראל</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Services & Links */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ pl: { md: 3 } }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, color: "#a8d5d5" }}>
              השירותים שלנו
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                  הובלת דירות
                </Typography>
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                  הובלת משרדים
                </Typography>
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                  אריזה ואחסון
                </Typography>
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                  אספקת חומרי אריזה
                </Typography>
              </Link>
              <Link href="/about" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                  אודותינו
                </Typography>
              </Link>
            </Box>


          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: "1px solid #444", mt: 4, pt: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} >
              <Typography variant="body2" color="rgba(255,255,255,0.7)">
                © 2024 ט.נ.א הובלות. כל הזכויות שמורות.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} >
              <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" }, gap: 3 }}>
                <Link href="#" color="rgba(255,255,255,0.7)" underline="none">
                  <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                    תנאי שימוש
                  </Typography>
                </Link>
                <Link href="#" color="rgba(255,255,255,0.7)" underline="none">
                  <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                    מדיניות פרטיות
                  </Typography>
                </Link>
                <Link href="/form" color="rgba(255,255,255,0.7)" underline="none">
                  <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
                    בקשת הצעת מחיר
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
