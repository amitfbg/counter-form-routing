import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import "./Form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("female");
  const [department, setDepartment] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!check) {
      setError("Please tick the box");
    } else {
      setError("");

      props.history.push("/success", {
        name,
        email,
        password,
        gender,
        department,
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
              name="Name"
              variant="outlined"
              required
              fullWidth
              id="Name"
              label="Name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <FormLabel>Gender</FormLabel> */}
            <RadioGroup
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
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
            <FormControl required fullWidth variant="outlined">
              <InputLabel>Department</InputLabel>
              <Select
                native
                label="Department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option aria-label="None" value=""></option>
                <option value={"CSE"}>CSE</option>
                <option value={"IT"}>IT</option>
                <option value={"ECE"}>ECE</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check}
                  onChange={(e) => {
                    setCheck(e.target.checked);
                  }}
                  color="primary"
                />
              }
              label="I have read all the terms and conditions."
            />
          </Grid>
        </Grid>
        {error && <p>{error}</p>}
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
}

export default Form;
