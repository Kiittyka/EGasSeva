export class CustomerDetail {
    constructor(
        public id:number,
        public uuid :string,
        public name:string,
        public email:string,
        public contact:number,
        public agency:string,
        public adhaar:string,
        public country:string,
        public state:string,
        public city:string,
        public zip:number,
        public accept:boolean,
        public date: string
    ){
    }
}
