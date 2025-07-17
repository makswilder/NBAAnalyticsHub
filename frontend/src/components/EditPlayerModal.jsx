import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function EditPlayerModal({ open, onClose, player, onSave }) {
  const [form, setForm] = useState(player || {});

  React.useEffect(() => {
    setForm(player || {});
  }, [player]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  if (!player) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Edit Player
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {Object.keys(player).map((key) =>
              key !== 'team' ? (
                <Grid item xs={12} key={key}>
                  <TextField
                    fullWidth
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                  />
                </Grid>
              ) : null
            )}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Team'
                name='team'
                value={form.team}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button onClick={onClose} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button type='submit' variant='contained' color='primary'>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

export default EditPlayerModal;
