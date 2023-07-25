const { uuid } = require('uuidv4');
const bcrypt = require('bcryptjs');
const connection = require('../config/envConfig.jsx');
const { response } = require('express');
const saltRounds = 12;

exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
        if(error) {
            res.status(500).send({error: error});
            return;
        }

        if(results.length === 0) {
            res.status(400).send({error: "Username doesn't exist in the system"});
            return;
        }

        const hashedPassword = results[0].password;
        const match = bcrypt.compareSync(password, hashedPassword);

        if(match && results[0].username === username){
            res.status(200).send({success: "User logged in"});
            return;
        } else {
            res.status(400).send({error: "Incorrect username or password"});
            return;
        }
    });
};

exports.register = (req,res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds);
    const id = uuid();

    connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
        if(error) {
            res.status(500).send({error: error});
            return;
        }
        if(results.length > 0){
            res.status(400).send({error: "Username already in use"});
            return;
        }
    });

    connection.query("INSERT INTO users SET ?", {user_id: id, username: username, password: password}, 
    (error, results, fields) => {
        if(error){
            res.status(500).send({error: error});
            return;
        }
        res.status(200).send({success: "User Registered"});
    })
};

exports.fireAuthSignOn = (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user_id = uuid();
    if(password){
        connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
            if(error) {
                res.status(500).send({error: error});
                return;
            }
            if(results.length === 0){
                res.status(400).send({error: "User could not be found"});
                return;
            }
            if(password && results[0].length > 0){
                res.status(200).send({success: "User logged in"})
            }
        })
    } else {
        password = uuid();
        const userId = uuid();
        connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
            if(error) {
                res.status(500).send({error: error});
                return;
            }
            if(results.length > 0){
                res.status(400).send({error: "User already in use"});
                return;
            }
        });
        connection.query("INSERT INTO users SET ?", {user_id: userId, username: username, password: password}, (error, results) => {
            if(error) {
                res.status(500).send({error: error});
                return;
            }
            res.status(200).send({success: "User logged in"});
        });
    }    
};

exports.leaderboard = (req,res) => {
    const username = req.body.username;
    //Current thought is update is an array containing ["update type", value]
    const update = req.body.update;
    connection.query("SELECT * FROM highest_score WHERE username = ?",[username], (error, results) => {
        if(error){
            res.status(500).send({error: error});
            return;
        }
        if(results.length === 0){
            res.status(400).send({error: "Problem retrieving leaderboard"});
            return;
        }
        res.status(200).send({success: "User data found"});
    });
}