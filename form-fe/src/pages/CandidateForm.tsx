import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { documentFields } from './constant'
import { Cancel, CheckCircle, CloudUpload, Delete, Download } from '@mui/icons-material'

const CandidateForm = () => {

  const isMobile = useMediaQuery((theme:any) => theme.breakpoints.down('sm'));

  //input parameter
  const [form,setForm] = useState({
    name:"",
    dateOfJoin:"",
    department:""
  })

  //documents state
  const [documents,setDocuments] = useState([...documentFields]);

  const handleInputChange = (e:any)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleFileUpload = (docId:any,file:any)=>{
    if(file.size > 5*1024*1024){
      alert("File size should not exceed 5mb");
      return
    }

    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === docId ? { ...doc, submitted: true, file } : doc
      )
    );
    
  }

  const handleFileDownload = (file:any)=>{
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  }

  const handleFileDelete = (docId:any)=>{
    setDocuments((prevDoc) =>
      prevDoc.map((doc)=> (
        doc.id === docId ? {...doc,submitted: false, file: null }: doc
      ))
    )
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Document Submission Form</Typography>
      <Box mb={3} display={'flex'} flexDirection={'column'} gap={2}>
        <TextField
          label='Name'
          name='name'
          value={form.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label='Date of Joining'
          name='dateOfJoin'
          value={form.dateOfJoin}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label='Department'
          name='department'
          value={form.department}
          onChange={handleInputChange}
          fullWidth
        />
      </Box>

      {isMobile ? (
        // Mobile layout: Each document as a section with a column layout
        <Box display="flex" flexDirection="column" gap={2}>
          {documents?.map((doc, index) => (
            <Paper key={doc.id} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>{`Document ${index + 1}: ${doc.name}`}</Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body1">Status:</Typography>
                  <Typography variant="body1">
                    {doc.submitted ? <CheckCircle color='success' /> : <Cancel color='error' />}
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body1">Action:</Typography>
                  <Box>
                    {!doc.submitted ? (
                      <Button
                        variant='outlined'
                        component='label'
                        startIcon={<CloudUpload />}
                      >
                        Upload
                        <input
                          type="file"
                          hidden
                          accept='.zip,.pdf,.png'
                          onChange={(e: any) => handleFileUpload(doc.id, e?.target?.files[0])}
                        />
                      </Button>
                    ) : (
                      <>
                        <IconButton
                          color='primary'
                          onClick={() => handleFileDownload(doc.file)}
                        >
                          <Download />
                        </IconButton>
                        <IconButton
                          color='error'
                          onClick={() => handleFileDelete(doc.id)}
                        >
                          <Delete />
                        </IconButton>
                      </>
                    )}
                  </Box>
                </Box>
              </Box>
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
                  <TableCell>Sr. No</TableCell>
                  <TableCell>Document</TableCell>
                  <TableCell>Submitted</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documents?.map((doc, index) => (
                  <TableRow key={doc.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{doc.name}</TableCell>
                    <TableCell>
                      {doc.submitted ? <CheckCircle color='success' /> : <Cancel color='error' />}
                    </TableCell>
                    <TableCell>
                      {!doc.submitted ? (
                        <Button
                          variant='outlined'
                          component='label'
                          startIcon={<CloudUpload />}
                        >
                          Upload
                          <input
                            type="file"
                            hidden
                            accept='.zip,.pdf,.png'
                            onChange={(e: any) => handleFileUpload(doc.id, e?.target?.files[0])}
                          />
                        </Button>
                      ) : (
                        <>
                          <IconButton
                            color='primary'
                            onClick={() => handleFileDownload(doc.file)}
                          >
                            <Download />
                          </IconButton>
                          <IconButton
                            color='error'
                            onClick={() => handleFileDelete(doc.id)}
                          >
                            <Delete />
                          </IconButton>
                        </>
                      )}
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
}

export default CandidateForm