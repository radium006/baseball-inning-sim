import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'
import Container from 'react-bootstrap/Container';

class Buttons extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            runs: 0,
            strikes: 0,
            balls: 0,
            outs: 0,
            bases: [0,0,0],
            playsArr: []
        }
    }

    singleBaseHit = (action) => {
        let numOfRunnersOnBase = 0
        let newBasePosition = [0, 0, 0]
        this.setState({
            playsArr: [...this.state.playsArr, action]
        })
        
        for(let i=0; i<3; i++){
            numOfRunnersOnBase = numOfRunnersOnBase + this.state.bases[i]
        }
        
       if(numOfRunnersOnBase === 3){
            this.setState({
                runs: this.state.runs + 1,
                
            })
       }
       else if(numOfRunnersOnBase === 0){
           this.setState({
               bases: [1,0,0]
               
           })
       }
       else if(numOfRunnersOnBase === 1){
            if(this.state.bases[2] === 1){
                this.setState({
                    runs: this.state.runs + 1,
                    bases: [0,0,0]
                })
            }
            else{
                for(let i=0; i<2; i++){
                    if(this.state.bases[i] === 1){
                    newBasePosition[i+1] = 1
                    }        
                }
                newBasePosition[0] = 1 
                this.setState({
                    bases: newBasePosition
                })
        }
       }
       else{
        if(this.state.bases[2] === 1){
            for(let i=0; i<2; i++){
                if(this.state.bases[i] === 1){
                newBasePosition[i+1] = 1
            }
            newBasePosition[0] = 1
            this.setState({
                runs: this.state.runs + 1,
                bases: newBasePosition
            })
        }
       }
       else{
        for(let i=0; i<2; i++){
            if(this.state.bases[i] === 1){
            newBasePosition[i+1] = 1
        }
        newBasePosition[0] = 1
        this.setState({
            bases: newBasePosition
        })
    }
       }
    }
    }

    doubleBaseHit = () => {
        var totalRuns = 0
        this.setState({
            playsArr: [...this.state.playsArr, ' 2b']
        })
        for(var i=1; i<3; i++){
            totalRuns = totalRuns + this.state.bases[i]
        }

        if(this.state.bases[0] === 1){
            this.setState({
                runs: this.state.runs + totalRuns,
                bases: [0,1,1]
            })
        }
        else{
            this.setState({
                runs: this.state.runs + totalRuns,
                bases: [0, 1, 0]
            })
        }
         

    }

    tripleBaseHit = () => {
        var totalRuns = 0
        this.setState({
            playsArr: [...this.state.playsArr, ' 3b']
        })
        for(var i=0; i<3; i++){
            totalRuns = totalRuns + this.state.bases[i]
        }
        this.setState({
            bases: [0,0,1],
            runs: this.state.runs + totalRuns
        })
    }

    homeRun = () => {
        var totalRuns = 0
        this.setState({
            playsArr: [...this.state.playsArr, ' hr']
        })
        for(var i=0; i<3; i++){
            totalRuns = totalRuns + this.state.bases[i]
        }
        this.setState({
            bases: [0,0,0],
            runs: this.state.runs + totalRuns + 1
        })
    }

    runnerOut = () => {
        this.setState({
            playsArr: [...this.state.playsArr, ' out']
        })
        let numOfRunnersOnBase = 0
        let newBasePosition = [0, 0, 0]
        for(let i=0; i<3; i++){
            numOfRunnersOnBase = numOfRunnersOnBase + this.state.bases[i]
        }
        if(numOfRunnersOnBase === 3){
            this.setState({
                outs: this.state.outs + 1,
                runs: this.state.runs + 1,
                bases: [0,1,1]
            })
        }
        else if(numOfRunnersOnBase === 2){
            if(this.state.bases[2] === 1){
                for(let i=0; i<2; i++){
                    if(this.state.bases[i] === 1){
                    newBasePosition[i+1] = 1
                }
            }
            this.setState({
                outs: this.state.outs + 1,
                runs: this.state.runs + 1,
                bases: newBasePosition
            })
        }
        else{
            for(let i =0; i<2; i++){
                if(this.state.bases[i] === 1){
                    newBasePosition[i+1] = 1
                }
            }
            this.setState({
                outs: this.state.outs + 1,
                bases: newBasePosition
            })
        }
    }
    else if(numOfRunnersOnBase === 1){
        let numOfRunnersOnBase = 0
        let newBasePosition = [0, 0, 0]
        for(let i=0; i<3; i++){
            numOfRunnersOnBase = numOfRunnersOnBase + this.state.bases[i]
        }

        if(this.state.bases[2] === 1){
            this.setState({
                outs: this.state.outs + 1,
                runs: this.state.runs + 1,
                bases: [0,0,0]
            })
        }
        else {
            for(let i =0; i<2; i++){
                if(this.state.bases[i] === 1){
                    newBasePosition[i+1] = 1
                }
            }
            this.setState({
                outs: this.state.outs + 1,
                bases: newBasePosition
            })
        }
    }
}

    walk = (action) => {
        this.setState({
            playsArr: [...this.state.playsArr, action]
        })
        let numOfRunnersOnBase = 0
        for(let i=0; i<3; i++){
            numOfRunnersOnBase = numOfRunnersOnBase + this.state.bases[i]
        }

        if(numOfRunnersOnBase === 3){
            this.setState({
                runs: this.state.runs + 1
            })
        }
        else if(numOfRunnersOnBase === 2){
            this.setState({
                bases: [1,1,1]
            })
            
        }
        else if(numOfRunnersOnBase === 1){
            if(this.state.bases[0] === 1){
                this.setState({
                    bases: [1,1,0]
                })
            }
            else{
                let newBasePosition = this.state.bases
                newBasePosition[0] = 1
                this.setState({
                    bases: newBasePosition
                })
            }
        }
        else{
            this.setState({
                bases: [1,0,0]
            })
        }
    }

    strikeOut = () => {
        this.setState({
            playsArr: [...this.state.playsArr, ' k']
        })
        this.setState({
            outs: this.state.outs + 1
         })    
    }

    clearBoard = () => {
        this.setState({
            runs: 0,
            strikes: 0,
            balls: 0,
            outs: 0,
            bases: [0,0,0],
            playsArr: []
        })
    }

    render(){
        return(
            <div>
            <div>
            <Container>  
                <Button id="action-button" onClick={() => this.singleBaseHit(' 1b')}>1 Base-hit</Button>
                <Button id="action-button" onClick={this.doubleBaseHit}>2 Base-hit</Button>
                <Button id="action-button" onClick={this.tripleBaseHit}>3 Base-hit</Button>
                <Button id="action-button" onClick={this.homeRun}>Home Run!</Button>
                <Button id="action-button" onClick={this.runnerOut}>Out</Button>
                <Button id="action-button" onClick={() => this.walk(' bb')}>Base On Balls</Button>
                <Button id="action-button" onClick={this.strikeOut}>Strike Out</Button>
                <Button id="action-button" onClick={() => this.singleBaseHit(' e')}>Error</Button>
                <Button id="action-button" onClick={() => this.walk(' hbp')}>Hit By Pitcher</Button>
                <Button id="action-button" onClick={this.clearBoard}>Clear Board</Button>
                
            </Container>    
            </div>
            
            <div>
            <Container>
                <Row>
                    <Col className='scorecard-cell'>
                        <h3>Bases</h3>
                        <h4>{this.state.bases}</h4>
                    </Col>
                    <Col className='scorecard-cell'>
                        <h3>Runs</h3>
                        <h4>{this.state.runs}</h4>       
                    </Col>
                    <Col className='scorecard-cell'>
                        <h3>Outs</h3>
                        <h4>{this.state.outs}</h4>
                    </Col>
                </Row>
            </Container>
           
            </div>
            <div>
                <h3>Plays</h3>
                <h4>{this.state.playsArr}</h4>
            </div>
            </div>
        )
    }
}

export default Buttons