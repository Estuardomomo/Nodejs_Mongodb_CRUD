const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    Nombre: String,
    Descripcion: String,
    Ingredientes: String,
    TipoMasa: String,
    Porciones: String,
    QuesoExtra: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks',TaskSchema)