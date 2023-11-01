import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MemberDetails = () => {
  const memberData = {
    firstName: 'John',
    lastName: 'Doe',
    id: '12345',
    contactInfo: 'john.doe@example.com',
    healthInfo: 'Good health',
    coverages: 'Full coverage',
  };

  return (
    <Box width="30%" border="1px solid #ccc" height="100%" overflow="auto">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <img src="profile-pic-url" alt="Profile Pic" />
            <Typography>{`${memberData.firstName} ${memberData.lastName}`}</Typography>
            <Typography>ID: {memberData.id}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Contact Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{memberData.contactInfo}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Health Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{memberData.healthInfo}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Coverages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{memberData.coverages}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MemberDetails;
