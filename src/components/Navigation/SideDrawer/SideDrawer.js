import React from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxillary';
import BackDrop from '../../../components/UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';


const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer,classes.close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer,classes.open];
    }
    return(
    <Aux>
        <BackDrop show={props.open} clicked={props.close}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
         <nav>
            <NavigationItems/>
        </nav>
        </div>
    </Aux>
    
)
}

export default sideDrawer;
