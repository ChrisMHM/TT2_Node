const droCollection = require('../db');
const validator = require('validator');

class DRO {
    
    constructor(datos){
        this.datos = datos;
        this.errores = [];
    }

    // Getter
    getDatos() {
        return this.datos;
    }

    getErrores(){
        return this.errores;
    }

    // Setters
    setDatos(valor){
        this.datos = valor;
    }

    setErrores(error){
        this.errores.push(error);
    }

    validar(){
        const nombres = this.getDatos().nombres;
        const apellidoPa = this.getDatos().apellidoPa;
        const apellidoMa = this.getDatos().apellidoMa;
        const correo = this.getDatos().correo;
        // const cedula = this.getDatos().cedula;
        const password = this.getDatos().password;
        const tipoDRO = this.getDatos().tipoDRO;
        // const situacionDRO = this.getDatos().situacionDRO;
        const numeroDRO = this.getDatos().numeroDRO;

        if (validator.isEmpty(nombres)){this.setErrores("Debe ingresar un nombre o nombres.")} 
        if (!validator.isAlpha(nombres)){this.setErrores("Solo se permiten letras.")}

        if (validator.isEmpty(apellidoPa)){this.setErrores("Debe ingresar un apellido paterno.")}
        if (!validator.isAlpha(apellidoPa)){this.setErrores("Solo se permiten letras.")}

        if (validator.isEmpty(apellidoMa)){this.setErrores("Debe ingresar un apellido materno.")}
        if (!validator.isAlpha(apellidoMa)){this.setErrores("Solo se permiten letras.")}

        if (validator.isEmpty(correo)){this.setErrores("Debe ingresar un correo válido.")}
        if (!validator.isEmail(correo)){this.setErrores("Solo se permiten letras.")}

        // if (validator.isEmpty(cedula)){this.setErrores("Debe ingresar una cédula profesional.")}
        // if (!validator.isInt(cedula)){this.setErrores("Solo se permiten números.")}

        if (validator.isEmpty(password)){this.setErrores("Debe ingresar una contraseña.")}
        if (validator.isEmpty(tipoDRO)){this.setErrores("Debe ingresar un tipo de DRO.")}

        // if (validator.isEmpty(situacionDRO)){this.setErrores("Debe ingresar una situación actual.")}

        if (validator.isEmpty(numeroDRO)){this.setErrores("Debe ingresar un número de DRO.")}
        if (!validator.isInt(numeroDRO)){this.setErrores("Solo se permiten números.")}

        if (nombres.length > 0 && nombres.length < 2) {this.setErrores("El nombre debe de ser de más de un caracter.")}
        if (nombres.length > 50) {this.setErrores("El nombre no puede exceder los 50 caracteres.")}
        
        if (apellidoPa.length > 0 && apellidoPa.length < 2) {this.setErrores("El apellido paterno debe de ser de más de un caracter.")}
        if (apellidoPa.length > 50) {this.setErrores("El apellido paterno no puede exceder los 50 caracteres.")}

        if (apellidoMa.length > 0 && apellidoMa.length < 2) {this.setErrores("El apellido materno debe de ser de más de un caracter.")}
        if (apellidoMa.length > 50) {this.setErrores("El apellido materno no puede exceder los 50 caracteres.")}

        if (password.length > 0 && password.length < 8) {this.setErrores("La contraseña debe de tener al menos 8 caracteres.")}
        if (password.length > 100) {this.setErrores("La contraseña no puede exceder los 100 caracteres.")}
    }

    limpiar(){
        if (typeof(this.getDatos().nombres) != "string") {this.getDatos().nombres = ""}
        if (typeof(this.getDatos().apellidoPa) != "string") {this.getDatos().apellidoPa = ""}
        if (typeof(this.getDatos().apellidoMa) != "string") {this.getDatos().apellidoMa = ""}
        if (typeof(this.getDatos().correo) != "string") {this.getDatos().correo = ""}
        // if (typeof(this.getDatos().cedula) != "string") {this.getDatos().cedula = ""}
        if (typeof(this.getDatos().password) != "string") {this.getDatos().password = ""}
        if (typeof(this.getDatos().tipoDRO) != "string") {this.getDatos().tipoDRO = ""}
        // if (typeof(this.getDatos().situacionDRO) != "string") {this.getDatos().situacionDRO = ""}
        if (typeof(this.getDatos().numeroDRO) != "string") {this.getDatos().numeroDRO = ""}

        this.datos = {
            nombres : this.datos.nombres.trim().toLowerCase(),
            apellidoPa : this.datos.apellidoPa.trim().toLowerCase(),
            apellidoMa : this.datos.apellidoMa.trim().toLowerCase(),
            correo : this.datos.correo.trim().toLowerCase(),
            // cedula : this.datos.cedula.trim().toLowerCase(),
            password : this.datos.password,
            tipoDRO : this.datos.tipoDRO,
            // situacionDRO : this.datos.situacionDRO,
            numeroDRO : this.datos.numeroDRO
        }
    }

    registrar(){
        // Paso 1: validar los datos de usuario
        this.limpiar();
        this.validar();

        // Paso 2: solo si no hay errores de validacion
        // entonces guardar los datos en la BD
        if (!this.getErrores().length) {
            
        }
    }
}

module.exports = DRO;