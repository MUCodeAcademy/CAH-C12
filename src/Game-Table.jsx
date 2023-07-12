import React, { useState } from 'react';
import styles from './CAHtable.module.css';

function CAHTable() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [isSeatSelectionEnabled, setIsSeatSelectionEnabled] = useState(false);
  const [dealerCards, setDealerCards] = useState([]);
  const [deck, setDeck] = useState([]);

  const seats = [
    { id: 1, player: null },
    { id: 2, player: null },
    { id: 3, player: null },
    { id: 4, player: null },
    { id: 5, player: null },
    { id: 6, player: null },
  ];

  const handleSeatSelection = (seatId) => {
    setSelectedSeat(seatId);
  };

  const handleSeatSelectionToggle = () => {
    setIsSeatSelectionEnabled(!isSeatSelectionEnabled);
    setSelectedSeat(null); 
  };

  const handlePlayerJoin = (userName) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === selectedSeat ? { ...seat, player: userName } : seat
    );
    seats.length && setSelectedSeat(null); 
    console.log(updatedSeats);
  };

  const handleDealCards = () => {
    const newDealerCards = deck.slice(0, 5); 
    const updatedDeck = deck.slice(5); 
    setDealerCards(newDealerCards);
    setDeck(updatedDeck);
  };

  
  useState(() => {
    const initialDeck = [
      'Card 1',
      'Card 2',
      'Card 3',
      'Card 4',
      'Card 5',
    ];
    setDeck(initialDeck);
  }, []);


  

  return (
    
      <div className={styles.cahTable}>
        <div className={styles.seatSelectionContainer}>
          <button
            className={`${styles.seatSelectionBtn} ${
              isSeatSelectionEnabled ? styles.active : ''
            }`}
            onClick={handleSeatSelectionToggle}
          >
            {isSeatSelectionEnabled ? 'Cancel Seat Selection' : 'Select a Seat'}
          </button>
        </div>
    
        <div className={styles.playerSeatsContainer}>
          {seats.map((seat) => (
            <button
              key={seat.id}
              className={`${styles.cahSeat} ${
                seat.player ? styles.occupied : ''
              } ${selectedSeat === seat.id ? styles.selected : ''}`}
              onClick={() => handleSeatSelection(seat.id)}
              disabled={!isSeatSelectionEnabled || seat.player}
            >
              {seat.player ? seat.player : 'Empty Seat'}
              {!seat.player && selectedSeat === seat.id && (
                <div className={styles.joinForm}>
                  <input
                    type="text"
                    placeholder="Enter player name"
                    onChange={(e) => handlePlayerJoin(e.target.value)}
                  />
                  <button onClick={() => handlePlayerJoin('Anonymous')}>
                    Join
                  </button>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="dealer-cards-container">
        <button className="deal-cards-btn" onClick={handleDealCards}>
          Deal Cards
        </button>
        <div className="dealer-cards">
          {dealerCards.map((card, index) => (
            <div className="dealer-card" key={index}>
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className="deck-container">
        <h3>Deck of Cards</h3>
        <p>Remaining cards: {deck.length}</p>
      </div>

        
      </div>
  );
}

export default CAHTable;