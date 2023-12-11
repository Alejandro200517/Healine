    export class UsersModel {
        constructor(
        public documento: string,
        public tipoDoc: string,
        public primerNombre: string,
        public segundoNombre: string,
        public primerApellido: string,
        public segundoApellido: string,
        public email: string,
        public password: string,
        public numero: string,
        public status: string = 'true',
        public rol: string = 'user', 
        public sede: string = 'pendiente'

    
        ) { }
        }
        