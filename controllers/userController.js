const User = require('../models/User');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken');

/*
const createUser = async (req, res) => {
    const { name, email, passaword } = req.body;
    await User.create({
      name: name, 
      email: email,
      password: password

    }).then(() => {
        res.json('sucesso ao criar usuario');
        console.log('sucesso!');
    }).catch((erro) => {
        res.json('Erro no usuario');
        console.log(`Erro ao criar: ${erro}`);
    })
}
const findUsers = async (req, res) => {
    const     = await User.findAll();
    try {
        res.json(users);
    } catch (error) {
        res.status(404).json("Ocorreu um erro na busca!");
    };
}

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await User.destroy({
            where: {
                
            }
        }).then(() => {
            res.json("Usuario deletado");
        })
    } catch (error) {
        res.status(404).json("Erro ao deletar");
    }
}
const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, password} = req.body;
    try {
        await User.update(
            {
               
            },
            {
                where: {
                    id: id
                }
            }
        ).then(() => {
            res.json("            ");
        })
    } catch (error) {
        res.status(404).json("                !");
    }
}
const authenticatedUser = async (req, res) => {
    const {       } = req.body;
    try {
        const isUserAuthenticated = await User.findOne({
            where: {
                
            }
        })
        const token = jwt.sign({
            name: 
            email: 
        },
            secret.secret, {
            expiresIn: 86400,
        })
        return res.json({
            name: 
            email: isUserAuthenticated.email,
            token: token
        });
    } catch (error) {
        return res.json("");
    }
}


module.exports = { createUser, findUsers, deleteUser, updateUser, authenticatedUser };
*/