import React from "react";

import { Bar } from "../charts/Bar";
import { Line } from "../charts/LineChart";
import "./Home.css";

//bootstrap cards
import { Card, CardContent, CardActions, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

//table imports from material ui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Home extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      barData: [],
      lineData: [],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      open: false,
      rows: [
        this.createData('Sales', this.randomData(Math.random(),Math.random()),this.randomData(Math.random(),Math.random())),
        this.createData('Advertising', this.randomData(Math.random(),Math.random()),this.randomData(Math.random(),Math.random())),
        this.createData('Inventory', this.randomData(Math.random(),Math.random()),this.randomData(Math.random(),Math.random())),
        this.createData('Entertainment', this.randomData(Math.random(),Math.random()),this.randomData(Math.random(),Math.random())),
        this.createData('Product', this.randomData(Math.random(),Math.random()),this.randomData(Math.random(),Math.random())),
      ]
    };
  }
  componentDidMount() {
    this.setState({
      lineData: this.getRandomNumbers(),
      barData: [],
    });
    this.updateData();
  }

  handleClick = () => {
    this.setState((prevState) => ({
      open: prevState.open === false ? true : false,
    }));
  };

  getRandomNumbers() {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
      arr.push(this.randomNumber(Math.random(), Math.random()));
    }
    // console.log(arr)
    return arr;
  }

  getRandomNumbersBardata() {
    let arr = [
      { year: 2021, sales: this.randomNumber(Math.random(), Math.random()) },
      { year: 2022, sales: this.randomNumber(Math.random(), Math.random()) },
      { year: 2023, sales: this.randomNumber(Math.random(), Math.random()) },
      { year: 2024, sales: this.randomNumber(Math.random(), Math.random()) },
      { year: 2025, sales: this.randomNumber(Math.random(), Math.random()) },
    ];

    // console.log(arr)
    return arr;
  }

  updateData = () => {
    this.setState({
      lineData: this.getRandomNumbers(),
      barData: this.getRandomNumbersBardata(),
    });
    // console.log(this.state.lineData)
  };
  randomNumber(min, max) {
    let mx = max > min ? max : min;
    let mn = max < min ? max : min;
    return Math.floor((Math.random() * (mx - mn) + mn) * 100);
  }

  randomData(min, max) {
    let mx = max > min ? max : min;
    let mn = max < min ? max : min;
    return Math.round((Math.random() * (mx - mn) + mn) * 100);
  }

  createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

  render() {
    return (
      <div className="home-div">
        <Card style={{ width: "40%", margin: "2vw" }}>
          <CardActions style={{ justifyContent: "space-between" }}>
            <p>Checking Account</p>
            <div style={{ justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                style={{
                  marginRight: "3px",
                  borderColor: "ButtonHighlight",
                  color: "green",
                }}
                onClick={this.updateData}
              >
                Manage
              </Button>
              <select
                onChange={this.updateData}
                style={{
                  marginRight: "3px",
                  borderColor: "ButtonHighlight",
                  color: "green",
                }}
              >
                {this.state.months.map((e) => (
                  <option key={e} value={e}> {e}</option>
                ))}
              </select>
            </div>
          </CardActions>
          <hr />
          <CardContent style={{ paddingLeft: "50px", alignItems: "center" }}>
            <Line lineData={this.state.lineData} width={window.innerWidth} height = {window.innerHeight} />
          </CardContent>
        </Card>
        <Card style={{ width: "40%", margin: "2vw" }}>
          <CardActions style={{ justifyContent: "space-between" }}>
            <p>Invoices owed to you</p>
            <Button
              variant="outlined"
              style={{
                marginRight: "3px",
                borderColor: "ButtonHighlight",
                color: "green",
              }}
              onClick={this.handleClick}
            >
              {" "}
              New Sales Invoice
            </Button>
          </CardActions>
          <hr />
          <CardContent style={{ paddingLeft: "50px" }}>
            <Bar barData={this.state.barData} />
          </CardContent>
        </Card>
        <Card style={{ width: "40%", margin: "2vw" }}>
          <CardActions style={{ justifyContent: "space-between" }}>
            <p>Total cash flow</p>
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <span
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "2px",
                    backgroundColor: "green",
                    marginRight: "3px",
                  }}
                ></div>
                <p>In </p>
              </span>

              <span
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "2px",
                    backgroundColor: "green",
                    marginRight: "3px",
                  }}
                ></div>
                <p>Out</p>
              </span>
            </div>
          </CardActions>
          <hr />
          <CardContent style={{ paddingLeft: "50px" }}>
            <Bar barData={this.state.barData} />
          </CardContent>
        </Card>
        <Card style={{ width: "40%", margin: "2vw" }}>
          <CardActions>
            <p>Account watchlist</p>
          </CardActions>
          <hr />
          <CardContent >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Account</TableCell>
                    <TableCell align="right">This month</TableCell>
                    <TableCell align="right">YTD</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* popup code */}
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClick}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Upload new invoice?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <input type="file" disabled />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick}>Disagree</Button>
            <Button onClick={this.handleClick}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Home;
