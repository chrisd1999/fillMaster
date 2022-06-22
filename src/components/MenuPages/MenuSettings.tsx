import { Switch } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FillOnBar, HelperSound } from '../../App';

interface MenuSettingsProps {
  setFillOnBar: (fillOnBar: number) => void;
  setHelperSound: (helperSound: boolean) => void;
}

const MenuSettings = ({ setFillOnBar, setHelperSound }: MenuSettingsProps) => {
  const fillOnBar = useContext(FillOnBar);
  const helperSound = useContext(HelperSound);
  const [fillsEvery, setFillEvery] = useState(fillOnBar.toString());

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFillEvery((event.target as HTMLInputElement).value);
  };

  const handleHelperSoundChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHelperSound(Boolean((event.target as HTMLInputElement).checked));
  };

  useEffect(() => {
    setFillOnBar(Number(fillsEvery));
  }, [fillsEvery]);

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Play fills every</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={fillsEvery}
        onChange={handleChange}
      >
        <FormControlLabel value="2" control={<Radio />} label="2 bars" />
        <FormControlLabel value="4" control={<Radio />} label="4 bars" />
      </RadioGroup>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Enable helper sound at start of fill.
      </FormLabel>
      <Switch onChange={handleHelperSoundChange} defaultChecked={helperSound} />
    </FormControl>
  );
};

export default MenuSettings;
