// import { 
//    Typography, Button, Box, Container, Card, CardContent, useMediaQuery,
//    Grid as Grid
// } from '@mui/material';
// import { createTheme } from '@mui/material/styles';
// import { AttachMoney, FlashOn, Security, CheckCircle, Business, Home, Inventory } from '@mui/icons-material';
// import type { ReactNode } from 'react';

// const theme = createTheme({
//   direction: 'rtl',
//   typography: { fontFamily: 'Arial, sans-serif' },
//   palette: { primary: { main: '#a8d5d5' }, secondary: { main: '#000000' } }
// });

// const Section = ({ children, sx = {}, ...props }: { children: ReactNode; sx?: any }) => (
//   <Box component="section" sx={{ py: 6, ...sx }} {...props}>{children}</Box>
// );
// const ServiceCard = ({ icon, title, desc  }: { icon: ReactNode; title: string; desc: string }) => (
//   <Card sx={{ textAlign: 'center', height: '100%', boxShadow: 3 }}>
//     <CardContent sx={{ p: 3 }}>
//       <Box sx={{ fontSize: 48, mb: 2 }}>{icon}</Box>
//       <Typography variant="h6" fontWeight="bold" mb={1}>{title}</Typography>
//       <Typography color="text.secondary">{desc}</Typography>
//     </CardContent>
//   </Card>
// );



// export default function HomePage() {
//   const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
//     // const theme = useTheme();
//   return (
//     <>
//       <Box>
//         {/* Hero */}
// <Section
//   sx={{
//     background: 'linear-gradient(to bottom right,rgb(183, 201, 199), #abd5d1)',
//     minHeight: '70vh',
//     display: 'flex',
//     alignItems: 'center',
//   }}
// >          <Container maxWidth="lg">
//             <Grid container spacing={4} alignItems="center">
//               <Grid size={{ xs: 12, md: 6 }} textAlign="center">
//                 {/* <LocalShipping sx={{ fontSize: 120 }} /> */}
//                 <Box
//   component="img"
//   src="/logo_.png" // Make sure this path matches your file location
//   alt="טנא הובלות"
//   sx={{ height: 120 }}
// />
//               </Grid>
//               <Grid size={{ xs: 12, md: 6 }} textAlign={isMobile ? 'center' : 'right'}>
// <Typography
//   variant={isMobile ? 'h4' : 'h2'}
//   fontWeight="bold"
//   mb={1}
//   component="h1"
//   color="#4f5a5a"         // medium gray for main heading
//   sx={{ lineHeight: 1.2 }} // slightly tighter line spacing
// >

//  הובלות מקצועיות ואמינות
// </Typography>
// <Typography
//   variant={isMobile ? 'h5' : 'h4'}
//   fontWeight="regular"
//   color="#9ca7a7"          // lighter gray for subheading
//   mb={3}
// >

// </Typography>

//                 <Typography variant="h6" mb={3} lineHeight={1.6}>
//                   ט.נ.א הובלות - הפתרון המושלם לכל צרכי ההובלה שלכם.<br />
//                   אנחנו מספקים שירות מקצועי, מהיר ובטוח לכל סוגי ההובלות
//                 </Typography>
//                 <Box display="flex" gap={2} justifyContent={isMobile ? 'center' : 'flex-end'}>
//                   <Button
//                     variant="outlined"
//                     sx={{ borderRadius: 25, px: 3, color: 'black', borderColor: 'black' }}
//                   >
//                     השירותים שלנו
//                   </Button>
//                   <Button
//                     variant="contained"
//                     sx={{ borderRadius: 25, px: 3, bgcolor: 'black', '&:hover': { bgcolor: '#333' } }}
//                   >
//                     קבלו הצעת מחיר
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Container>
//         </Section>


//         {/* Moving Types */}
//         <Section sx={{ bgcolor: '#f5f5f5' }}>
//           <Container maxWidth="lg">
//             <Typography variant="h3" textAlign="center" fontWeight="bold" mb={4}>
//               השירותים שלנו
//             </Typography>
//             <Grid container spacing={3}>
//               {[
//                 { icon: <Inventory />, title: 'אריזה ואחסון', desc: 'שירותי אריזה מקצועיים ופתרונות אחסון ' },
//                 { icon: <Business  />, title: 'הובלת משרדים', desc: 'שירותי הובלה למשרדים ועסקים עם הובלה מהירה ובטוחה' },
//                 { icon: <Home />, title: 'הובלת דירות', desc: 'הובלת דירות מקצועית עם צוות מיומן, אריזה בטוחה ופריקה זהירה' }
//               ].map((service, i) => (
//                 <Grid size={{ xs: 12, md: 4 }} key={i}>
//                   <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
//                     <CardContent>
//                       <Box sx={{ fontSize: 64, mb: 2 }}>{service.icon}</Box>
//                       <Typography variant="h5" fontWeight="bold" mb={2}>
//                         {service.title}
//                       </Typography>
//                       <Typography color="text.secondary">{service.desc}</Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Section>

//         {/* Why Choose Us */}
//         <Section sx={{     background: 'linear-gradient(to bottom right,rgb(183, 201, 199), #abd5d1)', }}>
//           <Container maxWidth="lg">
//             <Typography variant="h3" textAlign="center" fontWeight="bold" mb={4}>
//               למה לבחור בנו?
//             </Typography>
//             <Grid container spacing={3}>
//               {[
//                 { icon: <AttachMoney />, title: 'מחירים הוגנים', desc: 'מחיר שקוף וחברתי ללא הפתעות' },
//                 { icon: <FlashOn />, title: 'שירות מהיר', desc: 'זמינות מהירה ומיידית הגעה מדוקדקת' },
//                 { icon: <Security  />, title: 'ביטוח מלא', desc: 'כל הובלותינו בביטוח למטען ולשקט נפשי שלכם' },
//                 { icon: <CheckCircle />, title: 'מקצועיות ונגישות', desc: 'צוות מיומן עם שנות ניסיון רבות בתחום ההובלות' }
//               ].map((service, i) => (
//                 <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
//                   <ServiceCard {...service} />
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Section>


//       </Box>
//     {/* </ThemeProvider > */}
//       </>
//   );
// }
"use client"

import { Typography, Button, Box, Container, Card, CardContent, useMediaQuery, Grid } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import {
  AttachMoney,
  FlashOn,
  Security,
  CheckCircle,
  Build,
  Lightbulb,
  EmojiEmotions,
  CardGiftcard,
  Opacity,
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

const ServiceCard = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ fontSize: 48, mb: 2 }}>{icon}</Box>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography color="text.secondary">{desc}</Typography>
    </CardContent>
  </Card>
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
      {/* <Box sx={{ m: 0, p: 0 }}>
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
              opacity: 0.8, // 👈 adjust opacity here
              zIndex: 0,
            }}
          />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
                  sx={{ lineHeight: 1.2 }}
                >
                  הובלות מקצועיות ואמינות
                </Typography>

                <Typography variant="h6" mb={3} lineHeight={1.6}>
                  ט.נ.א הובלות - הפתרון המושלם לכל צרכי ההובלה שלכם.
                  <br />
                  אנחנו מספקים שירות מקצועי, מהיר ובטוח לכל סוגי ההובלות
                </Typography>
                <Box display="flex" gap={2} justifyContent={isMobile ? "center" : "flex-end"}>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 25, px: 3, bgcolor: "black", "&:hover": { bgcolor: "#333" } }}
                    onClick={() => navigate("/sendRequest")}
                  >
                    התחל עכשיו
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section> */}
      <Box sx={{ m: 0, p: 0 }}>
        {/* Hero */}
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
                {/* empty or something */}
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
                      px:4 ,       
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
        {/* </Box> */}


        {/* Why Choose Us - 4 Cards Grid */}
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

        {/* Why Choose Us - Features */}
        {/* <Section sx={{ background: "linear-gradient(to bottom right,rgb(183, 201, 199), #abd5d1)" }}>
          <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" fontWeight="bold" mb={4}>
              למה לבחור בנו?
            </Typography>
            <Grid container spacing={3}>
              {[
                { icon: <AttachMoney />, title: "מחירים הוגנים", desc: "מחיר שקוף וחברתי ללא הפתעות" },
                { icon: <FlashOn />, title: "שירות מהיר", desc: "זמינות מהירה ומיידית הגעה מדוקדקת" },
                { icon: <Security />, title: "ביטוח מלא", desc: "כל הובלותינו בביטוח למטען ולשקט נפשי שלכם" },
                {
                  icon: <CheckCircle />,
                  title: "מקצועיות ונגישות",
                  desc: "צוות מיומן עם שנות ניסיון רבות בתחום ההובלות",
                },
              ].map((service, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                  <ServiceCard {...service} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section> */}
      </Box>
    </>
  )
}
