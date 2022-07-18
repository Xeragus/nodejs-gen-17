// MVC architecture
// Modelot pretstavuva kolekcija od bazata, kontrolerot so koristenje na modeli dobiva podatoci
// koi gi prikazuva koristejkji views, views e vizuelnata reprezentacija sto ja gleda korisnikot

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    ssn: {
        type: Number
    },
    email: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
