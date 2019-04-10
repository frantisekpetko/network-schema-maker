import React from 'react';
import IconButton from '@material-ui/core/IconButton';
//import Grid from '@material-ui/core/Grid';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./Drawer.css";
import data from "../data.json";

/*
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
*/



class DrawerProposal extends React.Component {

    state = {
        searchString: ""
    };

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        //this.getCourses()
    };


    render() {

        return (
            <div className="root">
                <Drawer
                    className="drawer"
                    variant="persistent"
                    anchor="left"
                    open={this.props.attrOpen}
                    classes={{
                        paper: "drawer-paper",
                    }}
                >
                    <div className="drawer-header">
                        <IconButton onClick={this.props.methClose}>
                            {this.props.attrOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <Paper className="search-root">
                        <InputBase className="input" placeholder="Search components" />
                        <IconButton className="icon-button" aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                        <Divider className="divider" />
                    </Paper>

                    {data.drawerItems.map((menu) => (
                        <ExpansionPanel className="exp-width">
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className="heading">{menu.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List>
                                    {
                                        menu.list.map((item) => (
                                            <ListItem button component="a">
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))}

                </Drawer>
            </div>
        );
    }
}


export default DrawerProposal;