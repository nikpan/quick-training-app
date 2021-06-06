import { Button, createStyles, FormControl, FormControlLabel, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, TextField, Theme } from "@material-ui/core";
import React from "react";
import { SectionProps } from "./Section";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export interface AddSectionFormProps {
  onAddSection: (section: SectionProps) => any;
}

export default function AddSectionForm(props: AddSectionFormProps) {
  const classes = useStyles();

  const [type, setType] = React.useState('');
  const [heading, setHeading] = React.useState('');
  const [text, setText] = React.useState('');
  const [videoUrl, setVideoUrl] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [options, setOptions] = React.useState([] as string[]);
  const [newOption, setNewOption] = React.useState('');
  const [answer, setAnswer] = React.useState('');

  const handleAnswerChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAnswer(event.target.value as string);
  }

  const handleHeadingChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setHeading(event.target.value as string);
  }

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  const handleTextChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setText(event.target.value as string);
  }

  const handleUrlChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVideoUrl(event.target.value as string);
  }

  const handleQuestionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuestion(event.target.value as string);
  }

  const addOption = () => {
    if (newOption !== '') {
      options.push(newOption);
      setOptions(options);
      setNewOption('');
    }
  }

  const handleNewOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNewOption(event.target.value as string);
  }

  const renderOptions = (qoptions: string[]) => {
    let output: JSX.Element[] = [];
    for (let i = 0; i < qoptions.length; i++) {
      const option = qoptions[i];
      output.push(<FormControlLabel value={i.toString()} control={<Radio />} label={option} />);
    }
    return output;
  }

  const renderQnAForm = () => {
    return (
      <>
        <TextField
          label="Question"
          id="question-string"
          value={question}
          onChange={handleQuestionChange}
        />
        <RadioGroup value={answer} onChange={handleAnswerChange}>
          {renderOptions(options)}
        </RadioGroup>
        <TextField
          label="Option"
          id="new-option"
          value={newOption}
          onChange={handleNewOptionChange}
        />
        <Button onClick={addOption}>Add Option</Button>
      </>
    );
  }

  const renderVideoForm = () => {
    return (
      <TextField
        label="Youtube Url"
        id="youtube-url"
        value={videoUrl}
        onChange={handleUrlChange}
      />
    );
  }

  const renderTextForm = () => {
    return (
      <TextField
        label="Text"
        id="text-content"
        value={text}
        onChange={handleTextChange}
      />
    );
  }

  const addSection = () => {
    switch (type) {
      case 'qna':
        props.onAddSection({
          heading: heading,
          content: {
            type: type,
            question: question,
            options: options,
            answer: parseInt(answer)
          }
        });
        break;
      case 'text':
        props.onAddSection({
          heading: heading,
          content: {
            type: type,
            textContent: text
          }
        });
        break;
      case 'video':
        props.onAddSection({
          heading: heading,
          content: {
            type: type,
            url: videoUrl,
            start: 0
          }
        });
        break;
      default:
        return;
    }
    setType('');
    setHeading('');
    setText('');
    setVideoUrl('');
    setQuestion('');
    setOptions([]);
    setNewOption('');
    setAnswer('');
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="type-label">Content Type</InputLabel>
        <Select
          id="type-select"
          label="Content Type"
          value={type}
          onChange={handleTypeChange}
        >
          <MenuItem value={'text'}>Text Content</MenuItem>
          <MenuItem value={'video'}>Embed Video Content</MenuItem>
          <MenuItem value={'qna'}>QnA Content</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Section Heading"
        id="section-heading"
        value={heading}
        onChange={handleHeadingChange}
      />
      {type === 'text' ? renderTextForm() : <></>}
      {type === 'video' ? renderVideoForm() : <></>}
      {type === 'qna' ? renderQnAForm() : <></>}
      <Button onClick={addSection}>Add Content Section</Button>
    </div>
  );
}