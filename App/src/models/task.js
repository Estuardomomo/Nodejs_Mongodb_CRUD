const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    Nombre: String,
    Descripcion: String,
    Ingredientes: Array,
    TipoMasa: Number,
    Porciones: Number,
    QuesoExtra: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks',TaskSchema)