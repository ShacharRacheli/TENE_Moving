// "use client"

// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton
// } from "@mui/material"
// import {
//   Phone,
//   Email,
//   LocationOn,
//   Facebook,
//   Instagram,
//   WhatsApp
// } from "@mui/icons-material"

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: "#2d2d2d",
//         color: "white",
//         pt: 6,
//         pb: 3,
//         direction: "rtl",
//         textAlign: "right"
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Company Info */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ mb: 3 }}>
//               <Typography
//                 variant="h5"
//                 fontWeight="bold"
//                 sx={{ mb: 2, color: "#a8d5d5" }}
//               >
//                 ט.נ.א הובלות
//               </Typography>
//               <Typography variant="body2" sx={{ lineHeight: 1.6, mb: 2 }}>
//                 חברת הובלות ישראלית המתמחה בשירות מקצועי, אמין ואישי. אנו מעניקים
//                 שירות מלא לכל סוגי ההובלות בכל רחבי הארץ.
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{ fontWeight: "bold", color: "#a8d5d5" }}
//               >
//                 הובלה בשקט ובביטחון
//               </Typography>
//             </Box>
//           </Grid>

//           {/* Contact Info */}
//           <Grid item xs={12} md={4}>
//             <Typography
//               variant="h6"
//               fontWeight="bold"
//               sx={{ mb: 3, color: "#a8d5d5" }}
//             >
//               צור קשר
//             </Typography>
//             <Box sx={{ mb: 2 }}>
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <Phone sx={{ ml: 2, color: "#a8d5d5" }} />
//                 <Box>
//                   <Link href="tel:050-123-4567" color="inherit" underline="none">
//                     <Typography variant="body2">050-123-4567</Typography>
//                   </Link>
//                   <Link href="tel:03-123-4567" color="inherit" underline="none">
//                     <Typography variant="body2">03-123-4567</Typography>
//                   </Link>
//                 </Box>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <Email sx={{ ml: 2, color: "#a8d5d5" }} />
//                 <Box>
//                   <Link
//                     href="mailto:info@tne-moving.co.il"
//                     color="inherit"
//                     underline="none"
//                   >
//                     <Typography variant="body2">
//                       info@tne-moving.co.il
//                     </Typography>
//                   </Link>
//                   <Link
//                     href="mailto:office@tne-moving.co.il"
//                     color="inherit"
//                     underline="none"
//                   >
//                     <Typography variant="body2">
//                       office@tne-moving.co.il
//                     </Typography>
//                   </Link>
//                 </Box>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <LocationOn sx={{ ml: 2, color: "#a8d5d5" }} />
//                 <Typography variant="body2">בני ברק, ישראל</Typography>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Services */}
//           <Grid item xs={12} md={4}>
//             <Typography
//               variant="h6"
//               fontWeight="bold"
//               sx={{ mb: 3, color: "#a8d5d5" }}
//             >
//               השירותים שלנו
//             </Typography>
//             <Box sx={{ mb: 3 }}>
//               {[
//                 "הובלת דירות",
//                 "הובלת משרדים",
//                 "אריזה ואחסון",
//                 "אספקת חומרי אריזה"
//               ].map((service, idx) => (
//                 <Link
//                   href="#"
//                   key={idx}
//                   color="inherit"
//                   underline="none"
//                   sx={{ display: "block", mb: 1 }}
//                 >
//                   <Typography
//                     variant="body2"
//                     sx={{ "&:hover": { color: "#a8d5d5" } }}
//                   >
//                     {service}
//                   </Typography>
//                 </Link>
//               ))}
//               <Link
//                 href="/about"
//                 color="inherit"
//                 underline="none"
//                 sx={{ display: "block", mb: 1 }}
//               >
//                 <Typography
//                   variant="body2"
//                   sx={{ "&:hover": { color: "#a8d5d5" } }}
//                 >
//                   אודותינו
//                 </Typography>
//               </Link>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Divider */}
//         <Box sx={{ borderTop: "1px solid #444", mt: 4, pt: 3 }}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Typography variant="body2" color="rgba(255,255,255,0.7)">
//                 © 2024 ט.נ.א הובלות. כל הזכויות שמורות.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: { xs: "flex-start", md: "flex-end" },
//                   gap: 3
//                 }}
//               >
//                 <Link href="#" underline="none" color="rgba(255,255,255,0.7)">
//                   <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
//                     תנאי שימוש
//                   </Typography>
//                 </Link>
//                 <Link href="#" underline="none" color="rgba(255,255,255,0.7)">
//                   <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
//                     מדיניות פרטיות
//                   </Typography>
//                 </Link>
//                 <Link href="/form" underline="none" color="rgba(255,255,255,0.7)">
//                   <Typography variant="body2" sx={{ "&:hover": { color: "#a8d5d5" } }}>
//                     בקשת הצעת מחיר
//                   </Typography>
//                 </Link>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   )
// }
"use client"

import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material"
import { Phone, Email, LocationOn, Facebook, Instagram, WhatsApp } from "@mui/icons-material"

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#2d2d2d", color: "white", pt: 6, pb: 3 }} dir="rtl">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
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

          {/* Contact Info */}
          <Grid size={{xs:12 ,md:4}} 
            sx={{ px: { md: 3 }, borderLeft: { md: "1px solid #444" }, borderRight: { md: "1px solid #444" } }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, color: "#a8d5d5" }}>
              צור קשר
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ ml: 2, color: "#a8d5d5" }} />
                <Box>
                  <Link href="tel:050-123-4567" color="inherit" underline="none">
                    <Typography variant="body2">050-123-4567</Typography>
                  </Link>
                  <Link href="tel:03-123-4567" color="inherit" underline="none">
                    <Typography variant="body2">03-123-4567</Typography>
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ ml: 2, color: "#a8d5d5" }} />
                <Box>
                  <Link href="mailto:info@tne-moving.co.il" color="inherit" underline="none">
                    <Typography variant="body2">info@tne-moving.co.il</Typography>
                  </Link>
                  <Link href="mailto:office@tne-moving.co.il" color="inherit" underline="none">
                    <Typography variant="body2">office@tne-moving.co.il</Typography>
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
          <Grid size={{xs:12 ,md:6}} >
              <Typography variant="body2" color="rgba(255,255,255,0.7)">
                © 2024 ט.נ.א הובלות. כל הזכויות שמורות.
              </Typography>
            </Grid>
          <Grid size={{xs:12 ,md:6}} >
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
