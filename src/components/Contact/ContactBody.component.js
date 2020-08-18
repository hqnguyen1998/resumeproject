import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Link,
} from '@material-ui/core';

const ContactBody = ({ contacts }) => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table size='small'>
        <TableBody>
          {contacts.map((contact, i) => (
            <TableRow key={i}>
              <TableCell>
                {contact.link ? (
                  <Typography>
                    <Link
                      href={contact.link}
                      color='inherit'
                      underline='hover'
                      component='a'
                    >
                      {contact.title}
                    </Link>
                  </Typography>
                ) : (
                  <Typography>{contact.title}</Typography>
                )}
              </TableCell>
              <TableCell>
                {contact.link ? (
                  <Link href={contact.link}>{contact.icon}</Link>
                ) : (
                  contact.icon
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactBody;
