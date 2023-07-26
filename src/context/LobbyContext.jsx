
  return (
    <LobbyContext.Provider value={{ tables, joinTable, leaveTable }}>
      {props.children}
    </LobbyContext.Provider>
  );
};