import { Typography, Button, Box, Container, Card, CardContent, useMediaQuery, Grid } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import {
  Build,
  Lightbulb,
  EmojiEmotions,
  CardGiftcard,
} from "@mui/icons-material"
import type { ReactNode } from "react"
import { useNavigate } from "react-router"

const theme = createTheme({
  direction: "rtl",
  typography: { fontFamily: '"Inter", "Montserrat", "Open Sans", "Segoe UI", system-ui, -apple-system, sans-serif' },
  palette: { primary: { main: "#a8d5d5" }, secondary: { main: "#000000" } },
})

const Section = ({ children, sx = {}, ...props }: { children: ReactNode; sx?: any }) => (
  <Box component="section" sx={{ py: 6, ...sx }} {...props}>
    {children}
  </Box>
)

const TealCard = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <Card
    sx={{
      textAlign: "center",
      height: "100%",
      bgcolor: "#2d7d7d",
      color: "white",
      borderRadius: 3,
      p: 2,
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 3,
        }}
      >
        <Box sx={{ fontSize: 32, color: "#2d7d7d" }}>{icon}</Box>
      </Box>
      <Typography variant="h5" fontWeight="bold" mb={2} color="white">
        {title}
      </Typography>
      <Typography color="rgba(255,255,255,0.9)" sx={{ lineHeight: 1.6 }}>
        {desc}
      </Typography>
    </CardContent>
  </Card>
)

export default function HomePage() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const navigate = useNavigate();

  return (
    <>

      <Box sx={{ m: 0, p: 0 }}>
        <Section
          sx={{
            position: "relative",
            minHeight: "calc(72vh + 80px)",
            marginTop: '-8px',
            paddingTop: '80px',
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('/bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              opacity: 0.8,
              zIndex: 0,
            }}
          />
          <Container maxWidth={false} sx={{ position: "relative", zIndex: 1, px: 2 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }} textAlign="center">
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} textAlign={isMobile ? "center" : "right"}>
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  fontWeight="bold"
                  mb={1}
                  component="h1"
                  color="#4f5a5a"
                  sx={{ lineHeight: 1.2, paddingRight: "54px" }}
                >
                  הובלות מקצועיות<br />
                  ואמינות
                </Typography>

                <Typography variant="h6" mb={3} lineHeight={1.6} sx={{ paddingRight: "54px" }}>
                  ט.נ.א הובלות - הפתרון המושלם לכל צרכי ההובלה שלכם.
                  <br />
                  אנחנו מספקים שירות מקצועי, מהיר ובטוח לכל סוגי ההובלות
                </Typography>
                <Box display="flex" gap={2} justifyContent={isMobile ? "center" : "flex-end"} sx={{ paddingRight: "54px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 25,
                      px: 4,
                      py: 1,
                      fontSize: '1.25rem',
                      bgcolor: "#000000",
                      "&:hover": { bgcolor: "#333" },
                    }}
                    onClick={() => navigate("/sendRequest")}
                  >
                    התחל עכשיו
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {[
                {
                  icon: <Build />,
                  title: "שירות לקוחות איכותי",
                  desc: "אנו מקדישים לצרכים שלכם ומציעים פתרונות מותאמים אישית, תוך מתן תמיכה מקצועית בכל שלב של התהליך.",
                },
                {
                  icon: <Lightbulb />,
                  title: "מקצועיות ונסיון",
                  desc: "צוות בעל ניסיון רב בתחום, אנו מטפלים בעבודה איכותית ומדויקת בכל פרויקט.",
                },
                {
                  icon: <EmojiEmotions />,
                  title: "חדשנות ואיכות",
                  desc: "אנו עובדים עם החומרים הכי טובים בשוק ובטכנולוגיה הכי מתקדמת.",
                },
                {
                  icon: <CardGiftcard />,
                  title: "שירותים רחבים",
                  desc: "אנו מציעים מגוון רחב של שירותים, כך שתוכלו לקבל את כל מה שאתם צריכים במקום אחד.",
                },
              ].map((service, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={i}>
                  <TealCard {...service} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* Our Services - 3 Cards */}
        <Section sx={{ bgcolor: "#f5f5f5" }}>
          <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" fontWeight="bold" mb={4} color="#4f5a5a">
              השירותים שלנו
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  icon: <Build />,
                  title: "הובלה",
                  desc: "שירותי ההובלה של ט.נ.א הובלות כוללי הובלה מקצועית, זהירה ובטוחה - עם צוות אמין ועבודה עברית בגדול. אנו מובילים דירות, משרדים והכל בכל רחבי הארץ, תוך הקפדה על שלמות הציוד ושירות איכותי לכל לקוח.",
                },
                {
                  icon: <Lightbulb />,
                  title: "אספקת חומרי אריזה",
                  desc: "ט.נ.א הובלות מציעה למכירה חומרי אריזה איכותיים לכל צורך - קרטונים, ניילון בועות, דבק, ניילון גמיש ועוד. ניתן לרכוש דרכנו את כל הציוד הנדרש לאריזה בטוחה ונוחה לפני ההובלה.",
                },
                {
                  icon: <Lightbulb />,
                  title: "אריזת תכולה",
                  desc: "שירותי האריזה של ט.נ.א הובלות כוללי אריזה מקצועית של כל תכולת הבית - בגדים, כלי טבח, חפצי ניי, ספרים, אלקטרוניקה ועוד. אנו מטפלים בחומרי אריזה איכותיים והאריזה לכל פריט, כדי שהעברה דירת בקלות ובבטחון.",
                },
              ].map((service, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <TealCard {...service} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

      </Box>
    </>
  )
}
