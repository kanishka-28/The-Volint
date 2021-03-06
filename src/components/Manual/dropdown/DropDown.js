import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown({array, type, handleChange, name, value}) {

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={type}
          name={name}
          onChange={handleChange}
        >
            {array?.map((arr)=>(
                <MenuItem value={arr}>{arr}</MenuItem>
            ))}
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
