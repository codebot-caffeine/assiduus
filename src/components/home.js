import React from "react";

import { Bar } from "../charts/bar";
import Line from "../charts/line";
import "./home.css";

//bootstrap cards
import { Card, CardContent, CardActions } from "@mui/material";

import Container from "react-bootstrap/Container";

class Home extends React.Component {
  constructor(props) {
    super();

    this.state = {
      barData: [],
      lineData: [],
    };
  }
  componentDidMount() {
    this.setState({
      lineData: [],
    });
    this.updateData();
  }

  getRandomNumbers() {
    let arr = [];
    for (let i = 0; i < 11; i++) {
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

  updateData() {
    this.setState({
      lineData: this.getRandomNumbers(),
      barData: this.getRandomNumbersBardata(),
    });
    // console.log(this.state.lineData)
  }
  randomNumber(min, max) {
    let mx = max > min ? max : min;
    let mn = max < min ? max : min;
    return Math.floor((Math.random() * (mx - mn) + mn) * 100);
  }

  render() {
    return (
      <div className="home-div">
        {/* <div className="home-div">
              <div className="child-div">
                <div className="paragraphblock">
                  <p>Checking Account</p>
                  <span></span>
                </div>
                <div>
                  <Line lineData={this.state.lineData} />
                </div>
              </div>
              <div className="child-div">
                <Bar barData={this.state.barData} />
              </div>
              <div className="child-div">
                <Bar barData={this.state.barData} />
              </div>
              <div className="child-div">
              </div>
            </div> */}
        <Card style={{width: "40%",margin:"2vw"}}>
          <CardActions>
            <p>Checking Account</p>
            <span></span>
          </CardActions>
          <hr />
          <CardContent style={{paddingLeft:"50px"}}>
          <Line lineData={this.state.lineData} />
          </CardContent>
        </Card>
        <Card style={{width: "40%" ,margin:"2vw"}}>
          <CardActions>
            <p>Checking Account</p>
            <span></span>
          </CardActions>
          <hr />
          <CardContent style={{paddingLeft:"50px"}}>
          <Bar barData={this.state.barData} />
          </CardContent>
        </Card>
        <Card style={{width: "40%" ,margin:"2vw"}}>
          <CardActions>
            <p>Checking Account</p>
            <span></span>
          </CardActions>
          <hr />
          <CardContent style={{paddingLeft:"50px"}}>
          <Bar barData={this.state.barData} />
          </CardContent>
        </Card>
        <Card style={{width: "40%",margin:"2vw"}}>
          <CardActions>
            <p>Checking Account</p>
            <span></span>
          </CardActions>
          <hr />
          <CardContent style={{paddingLeft:"50px"}}>
          <Line lineData={this.state.lineData} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Home;
