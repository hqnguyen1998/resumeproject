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
  link: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  primaryTail: {
    backgroundColor: theme.palette.primary.main,
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
            <TimelineConnector
              className={
                i % 2 === 0 ? classes.primaryTail : classes.secondaryTail
              }
            />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography>{education.description}</Typography>
              {education.project && (
                <Link href={education.project} className={classes.link}>
                  {education.project}
                </Link>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
