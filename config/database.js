import mongoose from "mongoose";

async function coneccionBaseDeDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
    }
}

coneccionBaseDeDatos()