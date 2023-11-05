import React from "react";

import { Bar } from "../charts/bar";
import Line from "../charts/line";
import "./home.css";

//bootstrap cards
import { Card, CardContent, CardActions,Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

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
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      open:false
    };
  }
  componentDidMount() {
    this.setState({
      lineData: [],
      barData:[]
    });
    this.updateData();
  }

  handleClick = () => {
   this.setState((prevState) =>({
    open: prevState.open == false ? true : false
   }))
   console.log(this.state.open)
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
  }
  randomNumber(min, max) {
    let mx = max > min ? max : min;
    let mn = max < min ? max : min;
    return Math.floor((Math.random() * (mx - mn) + mn) * 100);
  }

  render() {
    return (
      <div className="home-div">
        <Card style={{width: "40%",margin:"2vw"}}>
          <CardActions style={{justifyContent:"space-between"}}>
            <p>Checking Account</p>
            <div style={{justifyContent:"space-between"}}>
              <Button variant="outlined" style={{marginRight:"3px",borderColor:"ButtonHighlight",color:"green"}} onClick={this.updateData}>Manage</Button>
               <select onChange={this.updateData} style={{marginRight:"3px",borderColor:"ButtonHighlight",color:"green"}}>
                {this.state.months.map((e)=> (<option value={e}> {e}</option>))}
               </select>
            </div>
          </CardActions>
          <hr />
          <CardContent style={{paddingLeft:"50px",alignItems:"center"}}>
          <Line lineData={this.state.lineData} />
          </CardContent>
        </Card>
        <Card style={{width: "40%" ,margin:"2vw"}}>
          <CardActions style={{justifyContent:"space-between"}}>
            <p>Invoices owed to you</p>
            <Button variant="outlined" style={{marginRight:"3px",borderColor:"ButtonHighlight",color:"green"}} onClick={this.handleClick}> New Sales Invoice</Button>
          </CardActions>
          <hr />
          <CardContent style={{paddingLeft:"50px"}}>
          <Bar barData={this.state.barData} />
          </CardContent>
        </Card>
        <Card style={{width: "40%" ,margin:"2vw"}}>
          <CardActions  style={{justifyContent:"space-between"}}> 
            <p>Total cash flow</p>
            <div  style={{justifyContent:"space-between",display:"flex"}}>
            <span style={{justifyContent:"space-between",display:"flex",alignItems:"center",marginRight:"10px"}}>
              <div style={{height:"10px",width:"10px",borderRadius:"2px",backgroundColor:"green",marginRight:"3px"}}></div>
              <p>In </p>
            </span>
            
            <span style={{justifyContent:"space-between",display:"flex",alignItems:"center",marginRight:"10px"}}>
             <div style={{height:"10px",width:"10px",borderRadius:"2px",backgroundColor:"green",marginRight:"3px"}}></div>
              <p>Out</p>
            </span>
            </div>
            
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

        {/* popup code */}
        <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClick}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
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
