import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { documentFields } from './constant'
import { Cancel, CheckCircle } from '@mui/icons-material'

const CandidateForm = () => {

  //input parameter
  const [form,setForm] = useState({
    name:"",
    dateOfJoin:"",
    department:""
  })

  //documents state
  const [documents,setDocuments] = useState([...documentFields]);



  return (
    <Box p={3}>
      <Typography variant='h4' gutterBottom>Document Submission Form</Typography>
      <Box mb={3} display={'flex'} flexDirection={'column'} gap={2}>
        <TextField
          label = 'Name'
          name = 'name'
          value={form.name}
          fullWidth
        />
        <TextField
          label = 'Date of Joining'
          name = 'dateOfJoin'
          value={form.dateOfJoin}
          fullWidth
        />
        <TextField
          label = 'Department'
          name = 'department'
          value={form.department}
          fullWidth
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Submitted</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents?.map((doc,index)=> (
              <TableRow key={doc.id}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{doc.name}</TableCell>
                <TableCell>
                  {doc.submitted ? (
                  <CheckCircle color='success' />
                ): (
                  <Cancel color='error' />
                )  
                }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CandidateForm