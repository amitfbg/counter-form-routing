import React, { useReducer } from "react";
import Container from "@material-ui/core/Container";
import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./Form.css";
import formReducer from "../../reducers/formReducer";
import * as actions from "../../actions/actionTypes";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  check: false,
  error: "",
  gender: "female",
  department: "",
};

function Form(props) {
  const [formValue, dispatch] = useReducer(formReducer, initialFormState);

  function handleInputChange(e) {
    dispatch({
      type: actions.Handle_Input_Change,
      field: e.target.name,
      payload: e.target.value,
    });
  }

  const options = ["CSE", "IT", "ECE"];

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValue.check) {
      dispatch({
        type: actions.Handle_Input_Change,
        field: "error",
        payload: "Please tick the box",
      });
    } else {
      dispatch({
        type: actions.Handle_Input_Change,
        field: "error",
        payload: "",
      });
      console.log(formValue.department);
      props.history.push("/success", {
        formValue,
      });
    }
  }

  return (
    <Container maxWidth="xs">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              variant="outlined"
              required
              fullWidth
              id="Name"
              label="Name"
              placeholder="Enter Your Name"
              value={formValue.name}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              placeholder="Enter Your Email"
              value={formValue.email}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Enter Your Password"
              value={formValue.password}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              value={formValue.gender}
              onChange={(e) => {
                dispatch({
                  type: actions.Handle_Radio_Change,
                  payload: e.target.value,
                });
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="department"
              onChange={(e, v) => {
                dispatch({
                  type: actions.Handle_Department_Change,
                  payload: v,
                });
              }}
              options={options}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Department"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValue.check}
                  onChange={() => {
                    dispatch({ type: actions.Handle_Toggle_Change });
                  }}
                />
              }
              label="I have read all the terms and conditions."
            />
          </Grid>
        </Grid>
        {formValue.error && <p>{formValue.error}</p>}
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
}

export default Form;
