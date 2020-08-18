import React from 'react';
import { Grid, Typography, LinearProgress } from '@material-ui/core';

const SkillsBody = ({ skills }) => {
  return (
    <div>
      <Grid container>
        {skills.map((skill) => (
          <React.Fragment key={skill.id}>
            <Grid item xs={12} md={4}>
              <Typography>{skill.title}</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <LinearProgress
                variant='determinate'
                value={skill.value}
                style={{ height: 8, borderRadius: 50, marginTop: 8 }}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default SkillsBody;
