import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

export default function UserCard({ name, email, location, picture, age, phone, nationality }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 180,
        width: 320,           // fixed max width
        // width: '100%',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, objectFit: 'cover' }}
        image={picture}
        alt={name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <CardContent sx={{ flex: '1 1 auto', overflow: 'hidden' }}>
          <Tooltip title={name}>
            <Typography variant="h6" noWrap>
              {name}
            </Typography>
          </Tooltip>

          <Tooltip title={email}>
            <Typography variant="body2" color="text.secondary" noWrap>
              📧 {email}
            </Typography>
          </Tooltip>

          <Tooltip title={location}>
            <Typography variant="body2" color="text.secondary" noWrap>
              📍 {location}
            </Typography>
          </Tooltip>

          <Typography variant="body2" color="text.secondary">
            🎂 Age: {age}
          </Typography>

          <Typography variant="body2" color="text.secondary" noWrap>
            📞 {phone}
          </Typography>

          <Typography variant="body2" color="text.secondary" noWrap>
            🌐 Nationality: {nationality}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}