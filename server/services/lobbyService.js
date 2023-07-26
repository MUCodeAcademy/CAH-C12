

const tables = [
    { id: 1, name: 'Table 1', players: [] },
    { id: 2, name: 'Table 2', players: [] },
    { id: 3, name: 'Table 3', players: [] },
];

exports.tables = (req, res) => {
    res.json(tables);
}

exports.join = (req, res) => {
    const tableId = req.params.tableId;
    const player = req.body.player; // this assumes we send player info in the request body

    const table = tables.find(table => table.id === Number(tableId));

    if (table) {
        table.players.push(player);
        res.json(table);
        console.log(table);
    } else {
        res.status(404).json({ error: "join, but table not found" });
    }
};

exports.leave = (req, res) => {
    const tableId = req.params.tableId;
    const player = req.body.player;

    const table = tables.find(table => table.id === Number(tableId));

    if (table) {
        table.players = table.players.filter(p => p !== player);
        res.json(table);
    } else {
        res.status(404).json({ error: "leave, but table not found" });
    }
}