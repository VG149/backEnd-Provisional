const db = require('./index');

const evento = db.sequelize.define("arquivos",{
    tipoArquivo:{
        type: db.Sequelize.STRING
    },
    dataIniSub:{
        type: db.Sequelize.DATE
    },
    
    dataFinSub:{
        type: db.Sequelize.DATE
    },
    dataIniAva:{
        type: db.Sequelize.DATE
    },
    dataFinAva:{
        type: db.Sequelize.DATE
    },
    normas:{
        type: db.Sequelize.TEXT
    },
    tipoUsuario:{
        //Lista de apoiadores
        type: db.Sequelize.STRING
    },
    area:{
        //Evento publico ou privado
        type: db.Sequelize.STRING
    },
    modArquivo:{
        type: db.Sequelize.BLOB
    },
    modApresentacao:{
        type: db.Sequelize.BLOB
    },
    plusArquivo:{
        //tipo do evento: remoto, hibrido ou presencial
        type: db.Sequelize.BLOB
    },
})

module.exports = arquivos;