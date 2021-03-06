import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {
         return { showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}/>
                {/* <p>video 131</p> */}
                {/* <p>section 14</p> */}
                {/* <p>video 267</p> */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
};

export default Layout;