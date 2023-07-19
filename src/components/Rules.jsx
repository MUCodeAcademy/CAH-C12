import React, { useState } from 'react';
import { styled } from '@mui/material';
import { Box, Drawer, Button, List, ListItem } from '@mui/material';

const Rules = () => {

  const RulesContainer = styled((props) => (
    <Box {...props} ></Box> ))
    ({
      fontFamily: 'Roboto',
      fontWeight: '550',
      border: '2px solid black',
      borderRadius: '8px',
      justifyContent: 'center',
      padding: '10px'
    })

  const [state, setState] = useState({
    bottom: false,
  });
  
  const toggleRules = (anchor, open) => (e) => {
    
    setState({ ...state, [anchor]: open});
  };

  const gamePlayRules = (anchor) => (
    <RulesContainer sx={{width: anchor === 'bottom' ? 'auto' : 250}}
      onClick = {toggleRules(anchor, false)}
      onKeyDown = {toggleRules(anchor, false)}>
        <h2>Game Rules</h2>
        <hr />
        
        <List sx={{textAlign: 'left'}}>
          <ListItem>
            The first player to enter the room is the judge. They flip the black prompt card to start the round.
          </ListItem>
          <ListItem>

          </ListItem>
        </List>
      </RulesContainer>
  );


  return(
    <div>
      {['bottom'].map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleRules(anchor, true)}>Rules</Button>
          <Drawer anchor = {anchor}
            open = {state[anchor]}
            onClose={toggleRules(anchor, false)} >
              {gamePlayRules(anchor)}
            </Drawer>
        </div>
      ))}
    </div>
  )
}

export default Rules;