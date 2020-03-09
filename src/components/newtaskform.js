import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DatePicker from "./calendar"

const useStyles = makeStyles(theme => ({
  formStyling: {
    display: "flex",
    flexDirection: "column",
    width: "20em"
  }
}));

export default function NewTaskForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <form>
      <div className={classes.formStyling}>
        <TextField required id="title" label="Title" margin="normal" />
        <TextField
          required
          id="descriptions"
          label="Description"
          margin="normal"
        />
        <DatePicker />
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="position"
            name="status pending completed"
            value={value}
            onChange={handleChange}
            
            row
          >
            <FormControlLabel
              value="pending"
              control={<Radio color="primary" />}
              label="Pending"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="completed"
              control={<Radio color="primary" />}
              label="Completed"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </form>
  );
}
