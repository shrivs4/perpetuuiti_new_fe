import {
  Box,
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC } from 'react';
import { entries } from './constant';
import { useNavigate } from 'react-router-dom';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const CandidateDetails: FC<any> = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  const getStatus = (documentData: any) => {
    let countComplete = 0;
    documentData?.forEach((doc: any) => {
      if (doc.submitted) {
        countComplete += 1;
      }
    });
    if (countComplete === 0) {
      return 'Not Started';
    } else if (countComplete === 20) {
      return 'Completed';
    } else {
      return 'Pending';
    }
  };

  return (
    <Box p={3}>
      <Box mb={3} display={'flex'} justifyContent={'space-between'}>
        <Typography variant="h6" gutterBottom>
          Candidate List
        </Typography>
        {!isMobile ? (
        <Button variant="contained">Add Candidate</Button>
        ) : (
          <AddCircleRoundedIcon color='primary' sx={{cursor:'pointer'}} />
        )
      }
      </Box>

      {isMobile ? (
        // Mobile layout: Display each candidate as a card
        <Box display="flex" flexDirection="column" gap={2}>
          {entries?.map((user: any) => (
            <Paper key={user.id} sx={{ p: 2 }}>
              <Typography variant="h6">{user.Name}</Typography>
              <Typography variant="body1">D.O.J: {user.DOJ}</Typography>
              <Typography variant="body1">Department: {user.Department}</Typography>
              <Typography variant="body1">Status: {getStatus(user.documents || [])}</Typography>
              <Link
                onClick={() => navigate(`/candidateForm/${user.id}`)}
                sx={{ cursor: 'pointer', display: 'block', mt: 1 }}
              >
                Click here
              </Link>
            </Paper>
          ))}
        </Box>
      ) : (
        // Desktop layout: Table format
        <Paper>
          <Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>D.O.J</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries?.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.Name}</TableCell>
                    <TableCell>{user.DOJ}</TableCell>
                    <TableCell>{user.Department}</TableCell>
                    <TableCell>{getStatus(user.documents || [])}</TableCell>
                    <TableCell>
                      <Link
                        onClick={() => navigate(`/candidateForm/${user.id}`)}
                        sx={{ cursor: 'pointer' }}
                      >
                        Click here
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default CandidateDetails;
