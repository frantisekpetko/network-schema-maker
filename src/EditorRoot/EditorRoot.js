import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import DrawerProposal from './components/DrawerProposal';



class EditorRoot extends React.Component {

    state = {
        open: false,
    };

    handleReloadPage = () => {
        window.location.reload();
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {

        return <div>
            <AppBar position="static" className={this.state.open ? "header-space-right" : ""}>
                <Toolbar>
                    <Grid className={this.state.open ? "icon-dissapear" : "left-align" } onClick={this.handleDrawerOpen} >
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid className="btn-right-space" >
                        <Button variant="contained"
                                color="secondary"
                                onClick={this.handleReloadPage}
                        >Network scheme maker</Button>
                    </Grid>


                    <Grid className="btn-right-space" >
                        <Button color="inherit">Save</Button>
                    </Grid>
                    <Grid className="btn-right-space" >
                        <Button color="inherit">Paste</Button>
                    </Grid>
                    <Grid className="btn-right-space" >
                        <Button color="inherit">Copy</Button>
                    </Grid>
                    <Grid className="btn-right-space" >
                        <Button color="inherit">Cut</Button>
                    </Grid>
                    <Grid className="btn-right-space" >
                    <Button color="inherit">Undo</Button>
                    </Grid>
                    <Grid className="btn-right-space" >
                        <Button color="inherit">Text</Button>
                    </Grid>
                    <Grid className="btn-right-space" >
                        <Button color="inherit">Line</Button>
                    </Grid>
                    <Grid className="btn-right-space" >
                        <Button color="inherit">Export</Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            <DrawerProposal methClose={this.handleDrawerClose} attrOpen={this.state.open}/>
        </div>

    }


}


export default EditorRoot;