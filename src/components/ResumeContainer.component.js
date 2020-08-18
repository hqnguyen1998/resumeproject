import React from 'react';
import ResumeLeft from './ResumeLeft.component';
import ResumeRight from './ResumeRight.component';
import { Grid, Container, Paper } from '@material-ui/core';

const ResumeContainer = () => {
  return (
    <Container maxWidth='lg'>
      <Paper square variant='outlined' style={{ padding: 20, margin: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <ResumeLeft />
          </Grid>
          <Grid item xs={12} md={8}>
            <ResumeRight />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ResumeContainer;
