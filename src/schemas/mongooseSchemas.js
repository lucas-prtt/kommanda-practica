import mongoose from "mongoose";


const PlatoSchema = new mongoose.Schema({
    nombre : String, 
    id : String,
    categoria: {
    type: String,
    enum: ['ENTRADA', 'PRINCIPAL', 'POSTRE', 'BEBIDA'],
    },
    precio : Number,
    estaDisponible: { type: Boolean, default: true }

});

module.exports = mongoose.model('PlatoSchema', PlatoSchema);

const PlatoPedidoSchema = new mongoose.Schema({
  idPlato: { type: mongoose.Schema.Types.ObjectId, ref: 'PlatoSchema' },
  cantidad: Number,
  notas: String,
  estaListo: { type: Boolean, default: false }
});

const ComandaSchema = new mongoose.Schema({
    id : Number,
    mesa : Number,
    platos : [PlatoPedidoSchema],
    bebidasListas :  { type: Boolean, default: false },
    pagado :  { type: Boolean, default: false }
})

module.exports = mongoose.model('ComandaSchema', ComandaSchema);

