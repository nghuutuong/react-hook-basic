import React from 'react';
import { useState, useEffect } from 'react';
class Countdown extends React.Component{
    state = {count: 60}

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }

    componentDidMount(){
        // setTimeout(() => {

        // },1000)
         this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count && this.state.count === 0){
            if(this.timer){
                clearInterval(this.timer)
                this.props.onTimeUp()
            }
        }
    }

    render(){
        return(
            <div>{this.state.count}</div>
        )           
    }
}

const NewCountDown = (props) => {
    const [count,setCount] = useState(60) 
    useEffect(() => {
        if(!count) {
            props.onTimeUp();
            return
        };
        let timer = setInterval(() => {
            console.log('dasdsa')
            setCount(count - 1)
            
        }, 1000);
        return () => {
            clearInterval(timer);
           
        }
    },[count]);
    return(
        <div>{count}</div>
    )
}

export {NewCountDown,Countdown};