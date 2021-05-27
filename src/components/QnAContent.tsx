import { makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText, Button } from '@material-ui/core';
import React from 'react';
import { IContent } from './Section';

export interface QnAContentProps extends IContent{
  question: string;
  options: string[];
  answer: number;
}
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function QnAContent(props: QnAContentProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt((event.target as HTMLInputElement).value));
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === props.answer) {
      setHelperText('You got it!');
      setError(false);
    } else if (value !== -1) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  const renderOptions = () => {
    let options = [];
    for (let i = 0; i < props.options.length; i++) {
      const option = props.options[i];
      options.push(<FormControlLabel key={i} value={i} control={<Radio />} label={option} />)
    }
    return options;
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">{props.question}</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          {renderOptions()}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}