const bcrypt = require('bcryptjs');
const droCollection = require('../db').collection('DRO');
const validator = require('validator');

class DRO {
    constructor(datos) {
        this.datos = datos;
        this.errores = [];
        this.tiposDRO = {
            "0": "",
            "1": "Director Responsable de Obra",
            "2": "Corresponsable en Seguridad Estructural",
            "3": "Corresponsable de Diseño Urbano y Arquitectónico",
            "4": "Perito de Desarrollo Urbano",
            "5": "Corresponsable en Instalaciones",
            "6": "PREY",
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
        // console.log(llave)
        // console.log(nuevoDato)
        this.datos[llave] = nuevoDato;
    }

    setErrores(error) {
        this.errores.push(error);
    }

    // Métodos
    separarCadena(cadena) {
        let arregloCadenas = cadena.split(" ");
        return arregloCadenas;
    }

    asignarDro() {
        const tipoDRO = this.getDatos().tipoDRO;
        this.setDatos("tipoDRO", this.tiposDRO[tipoDRO]);
    }

    validar() {
        const nombres = this.getDatos().nombres;
        const apellidoPa = this.getDatos().apellidoPa;
        const apellidoMa = this.getDatos().apellidoMa;
        const correo = this.getDatos().correo;
        // const cedula = this.getDatos().cedula;
        const password = this.getDatos().password;
        const tipoDRO = this.getDatos().tipoDRO;
        // const situacionDRO = this.getDatos().situacionDRO;
        const numeroDRO = this.getDatos().numeroDRO;
        let arregloNombres = [];

        if (validator.isEmpty(nombres)) { this.setErrores("Debe ingresar un nombre o nombres.") }
        else {
            arregloNombres = this.separarCadena(nombres);
            let objetoNombres = { nombreCompleto: nombres }
            let i = 0;

            arregloNombres.forEach(element => {
                objetoNombres[`nombre${i}`] = element;
                i++;
            })
            this.setDatos("nombres", objetoNombres);
        }
        // if (!validator.isAlpha(nombres, 'es-ES')) { this.setErrores("Nombre: Solo se permiten letras.") }

        if (validator.isEmpty(apellidoPa)) { this.setErrores("Debe ingresar un apellido paterno.") }
        if (!validator.isAlpha(apellidoPa, 'es-ES')) { this.setErrores("Solo se permiten letras.") }

        if (validator.isEmpty(apellidoMa)) { this.setErrores("Debe ingresar un apellido materno.") }
        if (!validator.isAlpha(apellidoMa, 'es-ES')) { this.setErrores("Solo se permiten letras.") }

        if (validator.isEmpty(correo)) { this.setErrores("Debe ingresar un correo válido.") }
        if (!validator.isEmail(correo)) { this.setErrores("Solo se permiten letras.") }

        // if (validator.isEmpty(cedula)){this.setErrores("Debe ingresar una cédula profesional.")}
        // if (!validator.isInt(cedula)){this.setErrores("Solo se permiten números.")}

        if (validator.isEmpty(password)) { this.setErrores("Debe ingresar una contraseña.") }
        if (validator.isEmpty(tipoDRO)) { this.setErrores("Debe ingresar un tipo de DRO.") }

        // if (validator.isEmpty(situacionDRO)){this.setErrores("Debe ingresar una situación actual.")}

        if (validator.isEmpty(numeroDRO)) { this.setErrores("Debe ingresar un número de DRO.") }
        if (!validator.isNumeric(numeroDRO)) { this.setErrores("Solo se permiten números.") }

        if (nombres.length > 0 && nombres.length < 2) { this.setErrores("El nombre debe de ser de más de un caracter.") }
        if (nombres.length > 50) { this.setErrores("El nombre no puede exceder los 50 caracteres.") }

        if (apellidoPa.length > 0 && apellidoPa.length < 2) { this.setErrores("El apellido paterno debe de ser de más de un caracter.") }
        if (apellidoPa.length > 50) { this.setErrores("El apellido paterno no puede exceder los 50 caracteres.") }

        if (apellidoMa.length > 0 && apellidoMa.length < 2) { this.setErrores("El apellido materno debe de ser de más de un caracter.") }
        if (apellidoMa.length > 50) { this.setErrores("El apellido materno no puede exceder los 50 caracteres.") }

        if (password.length > 0 && password.length < 8) { this.setErrores("La contraseña debe de tener al menos 8 caracteres.") }
        if (password.length > 50) { this.setErrores("La contraseña no puede exceder los 50 caracteres.") }
    }

    limpiar() {
        if (typeof (this.getDatos().nombres) != "string") { this.getDatos().nombres = "" }
        if (typeof (this.getDatos().apellidoPa) != "string") { this.getDatos().apellidoPa = "" }
        if (typeof (this.getDatos().apellidoMa) != "string") { this.getDatos().apellidoMa = "" }
        if (typeof (this.getDatos().correo) != "string") { this.getDatos().correo = "" }
        // if (typeof(this.getDatos().cedula) != "string") {this.getDatos().cedula = ""}
        if (typeof (this.getDatos().password) != "string") { this.getDatos().password = "" }
        if (typeof (this.getDatos().tipoDRO) != "string") { this.getDatos().tipoDRO = "" }
        // if (typeof(this.getDatos().situacionDRO) != "string") {this.getDatos().situacionDRO = ""}
        if (typeof (this.getDatos().numeroDRO) != "string") { this.getDatos().numeroDRO = "" }

        this.datos = {
            nombres: this.datos.nombres.trim().toLowerCase(),
            apellidoPa: this.datos.apellidoPa.trim().toLowerCase(),
            apellidoMa: this.datos.apellidoMa.trim().toLowerCase(),
            correo: this.datos.correo.trim().toLowerCase(),
            // cedula : this.datos.cedula.trim().toLowerCase(),
            password: this.datos.password,
            tipoDRO: this.datos.tipoDRO,
            // situacionDRO : this.datos.situacionDRO,
            numeroDRO: this.datos.numeroDRO.trim()
        }
    }

    registrar() {
        // Paso 1: validar los datos de usuario
        this.limpiar();
        this.validar();

        // Paso 2: solo si no hay errores de validacion
        // entonces guardar los datos en la BD
        if (!this.getErrores().length) {
            this.asignarDro();
            // console.log(this.getDatos());
            let salt = bcrypt.genSaltSync(10);
            this.getDatos().password = bcrypt.hashSync(this.getDatos().password, salt);
            droCollection.insertOne(this.datos);
        }
    }

    login() {
        return new Promise((resolve, reject) => {
            this.limpiar();
            droCollection.findOne({ correo: this.getDatos().correo }).then((intentoDRO) => {
                console.log("password login: " + this.getDatos().password);
                console.log("password hash: " + intentoDRO.password);
                if (intentoDRO && bcrypt.compareSync(this.getDatos().password, intentoDRO.password)) {
                    resolve("Felicidades!!")
                } else {
                    reject("Correo / contraseña invalido.");
                }
            }).catch(() => {
                reject("Por favor, intenta de nuevo");
            });
        });
    }
}

module.exports = DRO;