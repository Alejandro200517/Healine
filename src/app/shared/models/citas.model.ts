export class CitasModel {
    constructor(
        public id: string,
        public fecha: string,
        public hora: string,
        public paciente: string,
        public medico: string,
        public facturacion: string,
        public estado: string
    ) { }
}
