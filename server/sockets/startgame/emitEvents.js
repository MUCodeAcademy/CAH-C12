const emitEvents = (socket, players, currentPlayerIndex) => {
    const handleGame = () => {
      socket.emit('startGame');
    };
  
    const handleCards = () => {
      socket.emit('dealCards', players);
    };
  
    const handlePlay = () => {
      socket.emit('playCard', players[currentPlayerIndex].selectedCard);
    };
  
    return { handleGame, handleCards, handlePlay };
  };
  
  export default emitEvents;
  