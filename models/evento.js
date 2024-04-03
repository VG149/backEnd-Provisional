const db = require('./index');

const evento = db.sequelize.define("evento",{
    nomeADM:{
        type: db.Sequelize.STRING
    },
    emailADM:{
        type: db.Sequelize.STRING
    },
    
    nomeEvento:{
        type: db.Sequelize.STRING
    },
    emailEvento:{
        type: db.Sequelize.STRING
    },
    assunto:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },
    apoiador:{
        //Lista de apoiadores
        type: db.Sequelize.STRING
    },
    visibilidade:{
        //Evento publico ou privado
        type: db.Sequelize.STRING
    },
    anais:{
        type: db.Sequelize.STRING
    },
    certificados:{
        type: db.Sequelize.STRING
    },
    rhp:{
        //tipo do evento: remoto, hibrido ou presencial
        type: db.Sequelize.STRING
    },
})

module.exports = evento;