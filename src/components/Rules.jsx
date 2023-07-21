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
          <ListItem sx={{fontSize: 'small', fontWeight: 'bold'}}>
            Note: This game works best with friends on audio/video chat. 
          </ListItem>
          <ListItem>
            The first player to enter the room is the judge. They will flip the black prompt card and read it aloud to start the round.
          </ListItem>
          <ListItem>
            Everyone (excluding judge) submits a white card to best fill in the blank or answer the question prompted. 
          </ListItem>
          <ListItem>
            Once every player has submitted their white cards, all cards submitted will be shown and the judge can select which card they like best.
          </ListItem>
          <ListItem>
            The judge will announce the winning white card, giving the winner their black prompt card. 
          </ListItem>
          <ListItem>
            Every player that submitted a card, must draw a new one. Each player can have up to 10 white cards in their deck at all times. 
          </ListItem>
          <ListItem>
            The next judge (clockwise) then flips the black card to start the next round.
          </ListItem>
          <ListItem>
            First player to have 7 black cards wins!
          </ListItem>
          <ListItem>
            
          </ListItem>
          <ListItem sx={{fontSize: 'small', fontWeight: 'bold'}}>
            To exit rules, click anywhere or press Esc.
          </ListItem>
        </List>
      </RulesContainer>
  );


  return(
    <div>
      {['bottom'].map((anchor) => (
        <div key={anchor}>
          <Button variant="contained" sx={{width: '100%'}}
          onClick={toggleRules(anchor, true)}>Rules</Button>
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