import React, { Component } from 'react'
import ListItem from "./ListItem";
import Tools from './Tools';

const obj = [{
    title : "Doctor appointment",
    desc : "Visit doctor on particular day",
    isActive : false
},
{
    title : "Doctor appointment2",
    desc : "Visit doctor on particular day2",
    isActive : true
},
{
    title : "Doctor appointment3",
    desc : "Visit doctor on particular day3",
    isActive : false
},
{
    title : "Doctor appointment4",
    desc : "Visit doctor on particular day4",
    isActive : true
},
{
    title : "Doctor appointment5",
    desc : "Visit doctor on particular day5",
    isActive : false
}
]
class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:obj,
            activeState:'all'
        }
    }

   
    onListChange=(e)=>{
        const selectedVal= e.target.value;
         this.setState({
            activeState:selectedVal
        });
    }

    onHandleDelete = () => {
        console.log('del clicked');
    }
  render() {    
    const {
        data,
        activeState
    } = this.state;


    const newList = data.filter((item)=>{
        if(activeState==='all'){
           return true;
        }
        if(activeState==='active'){
            return item.isActive===true;
        }
        if(activeState==='disabled'){
            return item.isActive===false;
        }
        return false;
    });

    return (
        <Tools onAction={this.onListChange}>
        <div className='app-list'>
        {
        newList.map(function(item, i){
        return <ListItem  key={i} {...item} onDeleteAction={this.onHandleDelete} />
            }
         )
        }
        
        </div>
       </Tools>
    )
  }
}

export default List
