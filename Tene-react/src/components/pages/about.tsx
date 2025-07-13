// import { Typography, Box, Container, Card, CardContent, Grid } from "@mui/material"
// import { createTheme } from "@mui/material/styles"
// import { Business, People, Security, Favorite, LocationOn, CheckCircle } from "@mui/icons-material"
// import type { ReactNode } from "react"

// const theme = createTheme({
//   direction: "rtl",
//   typography: {
//     fontFamily: '"Inter", "Montserrat", "Open Sans", "Segoe UI", system-ui, -apple-system, sans-serif',
//   },
//   palette: { primary: { main: "#a8d5d5" }, secondary: { main: "#000000" } },
// })

// const Section = ({ children, sx = {}, ...props }: { children: ReactNode; sx?: any }) => (
//   <Box component="section" sx={{ py: 6, direction: 'rtl', textAlign: 'right', ...sx }} {...props}>
//     {children}
//   </Box>
// )

// const ValueCard = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
//   <Card
//     sx={{
//       textAlign: "right",
//       direction: "rtl",
//       height: "100%",
//       bgcolor: "#2d7d7d",
//       color: "white",
//       borderRadius: 3,
//       p: 2,
//       transition: "transform 0.3s ease",
//       "&:hover": {
//         transform: "translateY(-5px)",
//       },
//     }}
//   >
//     <CardContent sx={{ p: 3, textAlign: "right", direction: "rtl" }}>
//       <Box
//         sx={{
//           bgcolor: "white",
//           borderRadius: "50%",
//           width: 60,
//           height: 60,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           mx: "auto",
//           mb: 3,
//         }}
//       >
//         <Box sx={{ fontSize: 32, color: "#2d7d7d" }}>{icon}</Box>
//       </Box>
//       <Typography variant="h6" fontWeight="bold" mb={2} color="white" sx={{ textAlign: "right" }}>
//         {title}
//       </Typography>
//       <Typography color="rgba(255,255,255,0.9)" sx={{ lineHeight: 1.6, textAlign: "right" }}>
//         {desc}
//       </Typography>
//     </CardContent>
//   </Card>
// )

// export default function About() {
//   return (
//     <Box sx={{ direction: 'rtl', textAlign: 'right' }}>

//       <Section>
//         <Container maxWidth="lg">
//           <Grid container spacing={6}>
//             <Grid size={{ xs: 12, md: 8 }}>
//               <Box sx={{ mb: 6, textAlign: 'right', direction: 'rtl' }}>
//                 <Typography variant="h4" fontWeight="bold" mb={4} color="#2d5555" sx={{ textAlign: 'right' }}>
//                   מי אנחנו
//                 </Typography>
//                 <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
//                   ט.נ.א הובלות היא חברת הובלות ישראלית הפועלת מתוך מחויבות לאיכות, אמינות ושירות אישי. החברה מנוהלת על
//                   ידי נתן שחר, איש מקצוע עם ניסיון רב בתחום, אשר בנה צוות מקצועי הדוגל בעבודה עברית בלבד ומעניק ללקוחות
//                   ליווי מלא לכל אורך התהליך.
//                 </Typography>
//                 <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
//                   אנו מבינים שמעבר דירה או משרד הוא תהליך מורכב ולעיתים גם מלחיץ – לכן, אנו כאן כדי להפוך אותו לפשוט,
//                   שקט ובטוח.
//                 </Typography>
//               </Box>

//               <Box sx={{ mb: 6, textAlign: 'right', direction: 'rtl' }}>

//                 <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
//                   השירות שלנו מתחיל באריזה מקצועית ומסתיים רק כשהפריט האחרון מונח במקומו החדש – הכל תוך שקיפות, עמידה
//                   בזמנים והקשבה מלאה לצרכי הלקוח.
//                 </Typography>
//                 <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
//                   הצוות שלנו מורכב מאנשים ישרים, אדיבים ומנוסים שיודעים להתמודד עם כל אתגר – ממקררים ועד פסנתרים, מקומות
//                   גבוהים ועד גישות מורכבות.
//                 </Typography>
//               </Box>
//             </Grid>

//           </Grid>
//         </Container>
//       </Section>

//       <Section sx={{ bgcolor: "#f8f9fa" }}>
//         <Container maxWidth="lg">
//            <Grid container spacing={4}>
//             {[
//               {
//                 icon: <CheckCircle />,
//                 title: "איכות חומרי אריזה",
//                 desc: "אנו משתמשים רק בחומרי אריזה איכותיים ומקצועיים להגנה מרבית על הרכוש שלכם",
//               },
//               {
//                 icon: <Security />,
//                 title: "שלמות הציוד",
//                 desc: "הקפדה מרבית על שלמות כל פריט ופריט, מהרגע הראשון ועד להצבה במקום החדש",
//               },
//               {
//                 icon: <Business />,
//                 title: "סדר העבודה",
//                 desc: "עבודה מסודרת ומתוכננת, עמידה בזמנים ושקיפות מלאה לאורך כל התהליך",
//               },
//               {
//                 icon: <Favorite />,
//                 title: "אדיבות ומקצועיות",
//                 desc: "צוות אדיב ומקצועי שמתייחס לכל לקוח בכבוד ובהבנה לצרכיו הייחודיים",
//               },
//             ].map((value, i) => (
//               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
//                 <ValueCard {...value} />
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Section>


//     </Box>
//   )
// }
import { Typography, Box, Container, Card, CardContent, Grid } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { Business, People, Security, Favorite, LocationOn, CheckCircle } from "@mui/icons-material"
import type { ReactNode } from "react"

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: '"Inter", "Montserrat", "Open Sans", "Segoe UI", system-ui, -apple-system, sans-serif',
  },
  palette: { primary: { main: "#a8d5d5" }, secondary: { main: "#000000" } },
})

const Section = ({ children, sx = {}, ...props }: { children: ReactNode; sx?: any }) => (
  <Box component="section" sx={{ py: 6, direction: 'rtl', textAlign: 'right', ...sx }} {...props}>
    {children}
  </Box>
)

const ValueCard = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <Card
    sx={{
      textAlign: "right",
      direction: "rtl",
      height: "100%",
      bgcolor: "#2d7d7d",
      color: "white",
      borderRadius: 3,
      p: 2,
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    }}
  >
    <CardContent sx={{ p: 3, textAlign: "right", direction: "rtl" }}>
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
      <Typography variant="h6" fontWeight="bold" mb={2} color="white" sx={{ textAlign: "right" }}>
        {title}
      </Typography>
      <Typography color="rgba(255,255,255,0.9)" sx={{ lineHeight: 1.6, textAlign: "right" }}>
        {desc}
      </Typography>
    </CardContent>
  </Card>
)

export default function About() {
  return (
    <Box sx={{ direction: 'rtl', textAlign: 'right' }}>
  {/* <Section> */}
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ mb: 6, textAlign: 'right', direction: 'rtl' }}>
            <Typography variant="h4" fontWeight="bold" mb={4} color="#2d5555" sx={{ textAlign: 'right' }}>
              מי אנחנו
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
              ט.נ.א הובלות היא חברת הובלות ישראלית הפועלת מתוך מחויבות לאיכות, אמינות ושירות אישי. החברה מנוהלת על
              ידי נתן שחר, איש מקצוע עם ניסיון רב בתחום, אשר בנה צוות מקצועי הדוגל בעבודה עברית בלבד ומעניק ללקוחות
              ליווי מלא לכל אורך התהליך.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
              אנו מבינים שמעבר דירה או משרד הוא תהליך מורכב ולעיתים גם מלחיץ – לכן, אנו כאן כדי להפוך אותו לפשוט,
              שקט ובטוח.
            </Typography>
          </Box>

          <Box sx={{ mb: 6, textAlign: 'right', direction: 'rtl' }}>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
              השירות שלנו מתחיל באריזה מקצועית ומסתיים רק כשהפריט האחרון מונח במקומו החדש – הכל תוך שקיפות, עמידה
              בזמנים והקשבה מלאה לצרכי הלקוח.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4, textAlign: 'right' }}>
              הצוות שלנו מורכב מאנשים ישרים, אדיבים ומנוסים שיודעים להתמודד עם כל אתגר – ממקררים ועד פסנתרים, מקומות
              גבוהים ועד גישות מורכבות.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src="/about.webp" // Replace with your actual image path
            alt="אודות החברה"
                sx={{
              marginTop:"96px",
              width: "100%",
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  {/* </Section> */}
{/* </Box> */}
      <Section sx={{ bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              {
                icon: <CheckCircle />,
                title: "איכות חומרי אריזה",
                desc: "אנו משתמשים רק בחומרי אריזה איכותיים ומקצועיים להגנה מרבית על הרכוש שלכם",
              },
              {
                icon: <Security />,
                title: "שלמות הציוד",
                desc: "הקפדה מרבית על שלמות כל פריט ופריט, מהרגע הראשון ועד להצבה במקום החדש",
              },
              {
                icon: <Business />,
                title: "סדר העבודה",
                desc: "עבודה מסודרת ומתוכננת, עמידה בזמנים ושקיפות מלאה לאורך כל התהליך",
              },
              {
                icon: <Favorite />,
                title: "אדיבות ומקצועיות",
                desc: "צוות אדיב ומקצועי שמתייחס לכל לקוח בכבוד ובהבנה לצרכיו הייחודיים",
              },
            ].map((value, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <ValueCard {...value} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>


    </Box>
  )
}