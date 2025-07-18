import React, { useState, useMemo } from 'react';
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
  // Default form structure for new players
  const defaultForm = useMemo(
    () => ({
      name: '',
      nation: '',
      age: '',
      position: '',
      team: '',
      points: '',
      assists: '',
      blocks: '',
      threePoints: '',
      twoPoints: '',
      gamesPlayed: '',
      gameStarts: '',
      minutesPlayed: '',
      fieldGoals: '',
      steals: '',
      turnovers: '',
    }),
    []
  );

  const [form, setForm] = useState(player || defaultForm);

  React.useEffect(() => {
    setForm(player || defaultForm);
  }, [player, defaultForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert numeric fields to appropriate types
    const numericFields = [
      'age',
      'points',
      'assists',
      'blocks',
      'threePoints',
      'twoPoints',
      'gamesPlayed',
      'gameStarts',
      'minutesPlayed',
      'fieldGoals',
      'steals',
      'turnovers',
    ];
    const convertedValue = numericFields.includes(name)
      ? value === ''
        ? ''
        : Number(value)
      : value;
    setForm((prev) => ({ ...prev, [name]: convertedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          {player ? 'Edit Player' : 'Add New Player'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Define field order and labels explicitly for better UX */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Name'
                name='name'
                value={form.name || ''}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Nation (3-letter code)'
                name='nation'
                value={form.nation || ''}
                onChange={handleChange}
                required
                placeholder='e.g., USA'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Age'
                name='age'
                type='number'
                value={form.age || ''}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Position'
                name='position'
                value={form.position || ''}
                onChange={handleChange}
                required
                placeholder='PG, SG, SF, PF, C'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Team'
                name='team'
                value={form.team || ''}
                onChange={handleChange}
                required
              />
            </Grid>
            {/* Statistics fields */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Points'
                name='points'
                type='number'
                value={form.points || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Assists'
                name='assists'
                type='number'
                value={form.assists || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Blocks'
                name='blocks'
                type='number'
                value={form.blocks || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='3-Point Shots'
                name='threePoints'
                type='number'
                value={form.threePoints || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='2-Point Shots'
                name='twoPoints'
                type='number'
                value={form.twoPoints || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Games Played'
                name='gamesPlayed'
                type='number'
                value={form.gamesPlayed || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Game Starts'
                name='gameStarts'
                type='number'
                value={form.gameStarts || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Minutes Played'
                name='minutesPlayed'
                type='number'
                value={form.minutesPlayed || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Field Goals'
                name='fieldGoals'
                type='number'
                value={form.fieldGoals || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Steals'
                name='steals'
                type='number'
                value={form.steals || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Turnovers'
                name='turnovers'
                type='number'
                value={form.turnovers || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button onClick={onClose} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button type='submit' variant='contained' color='primary'>
                {player ? 'Update' : 'Add'} Player
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

export default EditPlayerModal;
