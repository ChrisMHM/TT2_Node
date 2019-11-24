const direccionCollection = require('../db').db().collection('Direccion');
const validator = require('validator');

class Direccion {
    constructor(datos) {
        this.datos = datos;
        this.errores = [];
        this.alcaldia = {
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
        this.uso_inmueble = {
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
        if (typeof (this.getDatos().calle_num) != "string") { this.getDatos().nombres = "" }
        if (typeof (this.getDatos().colonia) != "string") { this.getDatos().apellidoPa = "" }
        if (typeof (this.getDatos().alcaldia) != "string") { this.getDatos().apellidoMa = "" }
        if (typeof (this.getDatos().estado) != "string") { this.getDatos().correo = "" }
        if (typeof (this.getDatos().cp) != "string") { this.getDatos().password = "" }
        if (typeof (this.getDatos().num_areas) != "number") { this.getDatos().tipoDRO = "" }
        if (typeof (this.getDatos().uso_inmueble) != "string") { this.getDatos().numeroDRO = "" }

        this.datos = {
            calle_num: this.datos.calle_num.trim().toLowerCase(),
            colonia: this.datos.colonia.trim().toLowerCase(),
            alcaldia: this.datos.alcaldia,
            estado: this.datos.estado,
            cp: this.datos.cp.trim(),
            num_areas: this.datos.num_areas.trim(),
            uso_inmueble: this.datos.uso_inmueble
        }
    }

    validar() {
        return new Promise(async (resolve, reject) => {
            const calle_num = this.getDatos().calle_num;
            const colonia = this.getDatos().colonia;
            const alcaldia = this.getDatos().alcaldia;
            const estado = this.getDatos().estado;
            const cp = this.getDatos().cp;
            const num_areas = this.getDatos().num_areas;
            const uso_inmueble = this.getDatos().uso_inmueble;
            // let arregloNombres = [];
    
            if (validator.isEmpty(calle_num)) { this.setErrores("Calle y número: Debe ingresar una calle y número.") }
            if (!validator.isAlphanumeric(calle_num, 'es-ES')) { this.setErrores("Calle y número: solo se permiten números y letras.") }

            if (validator.isEmpty(colonia)) { this.setErrores("Colonia: debe ingresar una colonia.") }
            if (!validator.isAlphanumeric(colonia, 'es-ES')) { this.setErrores("Colonia: solo se permiten letras y números.") }
    
            if (validator.isEmpty(alcaldia)) { this.setErrores("Alcaldía: debe seleccionar una alcaldía.") }
            
            if (validator.isEmpty(estado)) { this.setErrores("Estado: debe ingresar un estado.") }
            
            if (validator.isEmpty(cp)) { this.setErrores("Código Postal: debe ingresar un CP.") }
            if (!validator.isNumeric(cp)) { this.setErrores("Código Postal: solo se permiten números.") }
            
            if (validator.isEmpty(num_areas)) { this.setErrores("Número de áreas: debe ingresar un número de áreas a analizar.") }
            if (!validator.isNumeric(num_areas)) { this.setErrores("Número de áreas: solo se permiten números.") }
            
            if (validator.isEmpty(uso_inmueble)) { this.setErrores("Contraseña: debe ingresar un uso del inmueble.") }


    
            if (calle_num.length > 0 && calle_num.length < 4) { this.setErrores("La calle y número deben de ser de más de 3 caracter.") }
            if (calle_num.length > 100) { this.setErrores("El nombre no puede exceder los 100 caracteres.") }
    
            if (colonia.length > 0 && colonia.length < 2) { this.setErrores("La colonia debe de ser de más de un caracter.") }
            if (colonia.length > 50) { this.setErrores("La colonia no puede exceder los 50 caracteres.") }
    
            if (apellidoMa.length > 0 && apellidoMa.length < 2) { this.setErrores("El apellido materno debe de ser de más de un caracter.") }
            if (apellidoMa.length > 50) { this.setErrores("El apellido materno no puede exceder los 50 caracteres.") }
    
            if (password.length > 0 && password.length < 8) { this.setErrores("La contraseña debe de tener al menos 8 caracteres.") }
            if (password.length > 50) { this.setErrores("La contraseña no puede exceder los 50 caracteres.") }
    
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
    
            resolve()
        })
    }

    registrar() {
        return new Promise(async (resolve, reject) => {
            //Paso 1: validar los datos del usuario
            this.limpiar();
            await this.validar();

            //Paso 2: solo si no hay errores de validacion
            // entonces guardar los datos en la BD

        });
    }

}