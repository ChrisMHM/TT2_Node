const input_num_dro = document.querySelector('#input-num-dro');

input_num_dro.addEventListener('onkeyup', () => {
    console.log(input_num_dro.value);
});

const buscarDRO = async numeroDRO => {
    const url = 'https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=padron-de-directores-responsables-de-obra-y-corresponsables&rows=5000'
    const res = await fetch(url);
    const droJSON = await res.json();

    // let dro = droJSON.records.filter(droObj.fields =>)
    console.log(droJSON.records[0]);
};