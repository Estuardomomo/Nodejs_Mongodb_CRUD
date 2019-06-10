const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    nombre: String,
    descripcion: String,
    Ingredientes: Array,
    masa: String,
    Porciones: Number
});

module.exports = mongoose.model('tasks',TaskSchema)