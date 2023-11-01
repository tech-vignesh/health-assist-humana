import React from 'react';
import { Box, Grid } from '@mui/material';
import ChatBox from '../chatbox/Chatbox';
import MemberDetails from '../memberDetails/MemberDetails';

const Dashboard = () => {
    return (
      <Box>
        <Grid container>
          <Grid item xs={9}>
            <ChatBox />
          </Grid>
          <Grid item xs={3}>
            <MemberDetails />
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Dashboard;