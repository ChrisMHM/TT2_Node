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
        const cedula = this.getDatos().cedula;
        const password = this.getDatos().password;
        const tipoDRO = this.getDatos().tipoDRO;
        const situacionDRO = this.getDatos().situacionDRO;
        const numeroDRO = this.getDatos().numeroDRO;

        if (nombres == ""){this.setErrores("Debes ingresar un nombre o nombres.")}
        if (apellidoPa == ""){this.setErrores("Debes ingresar tu apellido paterno.")}
        if (apellidoMa == ""){this.setErrores("Debes ingresar tu apellido materno.")}
        if (correo == ""){this.setErrores("Debes ingresar un correo válido.")}
        if (cedula == ""){this.setErrores("Debes ingresar tu cédula.")}
        if (password == ""){this.setErrores("Debes ingresar una contraseña.")}
        if (tipoDRO == ""){this.setErrores("Debes ingresar tu tipo de DRO.")}
        if (situacionDRO == ""){this.setErrores("Debes ingresar tu situación actual.")}
        if (numeroDRO == ""){this.setErrores("Debes ingresar tu número de DRO.")}
    }

    registrar(){
        // Paso 1: validar los datos de usuario
        this.validar();

        // Paso 2: solo si no hay errores de validacion
        // entonces guardar los datos en la BD
    }
}

module.exports = DRO;