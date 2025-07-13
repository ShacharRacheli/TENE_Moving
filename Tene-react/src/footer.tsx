import { Box, Container, Grid, Typography } from "@mui/material";
import type { ReactNode } from "react";

const Footer = () => {
    const ContactItem = ({ icon , title, info }: { icon: ReactNode; title: string; info: string []}) => (
  <Box textAlign="center">
    <Box sx={{ fontSize: 40, color: '#ff5722', mb: 2, display: 'inline-flex', justifyContent: 'center' }}>
      {icon}
    </Box>
    <Typography variant="h6" fontWeight="bold" mb={1}>{title}</Typography>
    <Box>
      {info.map((text, i) => (
        <Typography key={i}>{text}</Typography>
      ))}
    </Box>
  </Box>
    );
    const Section = ({ children, sx = {}, ...props }: { children: ReactNode; sx?: any }) => (
  <Box component="section" sx={{ py: 6, ...sx }} {...props}>{children}</Box>
);
    return (<>
    {/* Contact */}
        <Section sx={{ bgcolor: 'black', color: 'white' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" fontWeight="bold" mb={4} color="white">
              צור קשר
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <ContactItem 
                  icon={<Box component="span" role="img" aria-label="location">📍</Box>} 
                  title="כתובת" 
                  info={['רחוב הראשי 123', 'תל אביב, ישראל']} 
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <ContactItem 
                  icon={<Box component="span" role="img" aria-label="email">📧</Box>} 
                  title="אימייל" 
                  info={['info@tne-moving.co.il', 'office@tne-moving.co.il']} 
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <ContactItem 
                  icon={<Box component="span" role="img" aria-label="phone">📞</Box>} 
                  title="טלפון" 
                  info={['050-123-4567', '03-123-4567']} 
                />
              </Grid>
            </Grid>
          </Container>
        </Section>
    
    </>)
}
export default Footer;