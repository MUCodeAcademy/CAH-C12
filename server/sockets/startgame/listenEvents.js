const listenEvents = (socket, setIsPlaying, setCurrentPlayerIndex) => {
    socket.on('nextPlayer', (updatedPlayerIndex) => {
      setIsPlaying(false);
      setCurrentPlayerIndex(updatedPlayerIndex);
    });
  
    socket.on('startTimer', () => {
      setIsPlaying(true);
    });
  
    socket.on('stopTimer', () => {
      setIsPlaying(false);
    });
  };
  
  export default listenEvents;
  