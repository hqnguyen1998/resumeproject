import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';
import { Paper, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
}));

export default function CustomizedTimeline({ educations }) {
  const classes = useStyles();

  return (
    <Timeline align='alternate'>
      {educations.map((education, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent>
            <Typography variant='body2' color='textSecondary'>
              {education.time}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={i % 2 === 0 ? 'primary' : 'secondary'} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography>{education.description}</Typography>

              <Link
                href={education.project}
                color='secondary'
                underline='always'
                component='a'
              >
                {education.project}
              </Link>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
