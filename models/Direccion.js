const direccionCollection = require('../db').db().collection('Direccion');
const validator = require('validator');

class Direccion {
    constructor(datos) {
        this.datos = datos;
        this.errores = [];
        this.alcaldias = {
            "1": "Azcapotzalco",
            "2": "Coyoacán",
            "3": "Cuajimalpa de Morelos",
            "4": "Gustavo A. Madero",
            "5": "Iztacalco",
            "6": "Magdalena Contreras",
            "7": "Iztapalapa",
            "8": "Milpa Alta",
            "9": "Álvaro Obregón",
            "10": "Tláhuac",
            "11": "Tlalpan",
            "12": "Xochimilco",
            "13": "Benito Juárez",
            "14": "Cuauhtémoc",
            "15": "Miguel Hidalgo",
            "16": "Venustiano Carranza"
        };

        this.uso_inmuebles = {
            "1": "Casa habitación",
            "2": "Oficinas privadas",
            "3": "Educación",
            "4": "Departamentos",
            "5": "Industrias",
            "6": "Recreativo",
            "7": "Comercios",
            "8": "Estacionamiento",
            "9": "Centro de reunión",
            "10": "Oficinas públicas",
            "11": "Bodegas"
        };
    }

    // Getter
    getDatos() {
        return this.datos;
    }

    getErrores() {
        return this.errores;
    }

    // Setters
    setDatos(llave, nuevoDato) {
        this.datos[llave] = nuevoDato;
    }

    setErrores(error) {
        this.errores.push(error);
    }

    limpiar() {
        if (typeof (this.getDatos().calle) != "string") { this.getDatos().nombres = "" }
        if (typeof (this.getDatos().numero) != "string") { this.getDatos().numero = "" }
        if (typeof (this.getDatos().colonia) != "string") { this.getDatos().apellidoPa = "" }
        if (typeof (this.getDatos().alcaldia) != "string") { this.getDatos().apellidoMa = "" }
        if (typeof (this.getDatos().estado) != "string") { this.getDatos().correo = "" }
        if (typeof (this.getDatos().cp) != "string") { this.getDatos().password = "" }
        if (typeof (this.getDatos().num_areas) != "number") { this.getDatos().tipoDRO = "" }
        if (typeof (this.getDatos().uso_inmueble) != "string") { this.getDatos().numeroDRO = "" }

        this.datos = {
            calle: this.datos.calle.trim().toLowerCase(),
            numero: this.datos.numero.trim().toLowerCase(),
            colonia: this.datos.colonia.trim().toLowerCase(),
            alcaldia: this.datos.alcaldia,
            estado: this.datos.estado,
            cp: this.datos.cp.trim(),
            num_areas: this.datos.num_areas.trim(),
            uso_inmueble: this.datos.uso_inmueble
        }
    }

    validar() {
        return new Promise((resolve, reject) => {
            const calle = this.getDatos().calle;
            const numero = this.getDatos().numero;
            const colonia = this.getDatos().colonia;
            const alcaldia = this.getDatos().alcaldia;
            const estado = this.getDatos().estado;
            const cp = this.getDatos().cp;
            const num_areas = this.getDatos().num_areas;
            const uso_inmueble = this.getDatos().uso_inmueble;
    
            if (validator.isEmpty(calle)) { this.setErrores("Calle: debe ingresar una calle.") }
            if (!validator.isAlphanumeric(calle, 'es-ES')) { this.setErrores("Calle: solo se permiten letras.") }

            if (validator.isEmpty(numero)) { this.setErrores("Código Postal: debe ingresar un CP.") }
            if (!validator.isNumeric(numero)) { this.setErrores("Código Postal: solo se permiten números.") }
            
            if (validator.isEmpty(colonia)) { this.setErrores("Colonia: debe ingresar una colonia.") }
            if (!validator.isAlphanumeric(colonia, 'es-ES')) { this.setErrores("Colonia: solo se permiten letras y números.") }
    
            if (validator.isEmpty(alcaldia)) { this.setErrores("Alcaldía: debe seleccionar una alcaldía.") }
            if (validator.isEmpty(estado)) { this.setErrores("Estado: debe ingresar un estado.") }
            
            if (validator.isEmpty(cp)) { this.setErrores("Código Postal: debe ingresar un CP.") }
            if (!validator.isNumeric(cp)) { this.setErrores("Código Postal: solo se permiten números.") }
            
            if (validator.isEmpty(num_areas)) { this.setErrores("Número de áreas: debe ingresar un número de áreas a analizar.") }
            if (!validator.isNumeric(num_areas)) { this.setErrores("Número de áreas: solo se permiten números.") }
            
            if (validator.isEmpty(uso_inmueble)) { this.setErrores("Contraseña: debe ingresar un uso del inmueble.") }



            if (calle.length > 0 && calle.length < 4) { this.setErrores("La calle debe contener más de 2 caracteres.") }
            if (calle.length > 50) { this.setErrores("La calle no puede exceder los 50 caracteres.") }

            if (numero.length > 0 && numero.length < 2) { this.setErrores("El número debe de ser de más de 2 caracteres.") }
            if (numero.length > 10) { this.setErrores("El número no puede exceder los 10 dígitos.") }
    
            if (colonia.length > 0 && colonia.length < 2) { this.setErrores("La colonia debe de ser de más de un caracter.") }
            if (colonia.length > 50) { this.setErrores("La colonia no puede exceder los 50 caracteres.") }
    
            if (cp.length > 0 && cp.length < 2) { this.setErrores("El código postal debe de ser de más de un caracter.") }
            if (cp.length > 7) { this.setErrores("El código postal no puede exceder los 6 caracteres.") }
    
            if (num_areas.length > 0 && num_areas.length < 1) { this.setErrores("Debe haber la menos un área.") }
            if (num_areas.length > 1000) { this.setErrores("No puede haber más de 1000 áreas.") }
    
            /*
            if (numeroDRO.length > 0 && numeroDRO.length < 6 && validator.isNumeric(numeroDRO)) {
                let existeNumeroDRO = await droCollection.findOne({numeroDRO: this.getDatos().numeroDRO})
                if (existeNumeroDRO) {
                    this.setErrores("El número de DRO ya existe");
                }
            }
    
            if (validator.isEmail(correo)) {
                let existeCorreo = await droCollection.findOne({'correo': this.getDatos().correo})
                if (existeCorreo) {
                    this.setErrores("El correo ya existe");
                }
            }
            */
    
            resolve()
        })
    }

    asignarAlcaldia() {
        const alcaldia = this.getDatos().alcaldia;
        this.setDatos("alcaldia", this.alcaldias[alcaldia]);
    }

    asignarUsoInmueble() {
        const uso_inmueble = this.getDatos().uso_inmueble;
        this.setDatos("uso_inmueble", this.uso_inmuebles[uso_inmueble]);
    }

    registrar() {
        return new Promise(async (resolve, reject) => {
            //Paso 1: validar los datos del usuario
            this.limpiar();
            await this.validar();
            console.log(this.getDatos());

            //Paso 2: solo si no hay errores de validacion
            // entonces guardar los datos en la BD
            console.log(this.getErrores())
            if (!this.getErrores().length) {
                this.asignarAlcaldia();
                this.asignarUsoInmueble();
                
                await direccionCollection.insertOne(this.datos);
                resolve();
            } else {
                reject(this.errores);
            }
        });
    }

}

module.exports = Direccion;