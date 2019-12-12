export class Query {
  reply: string;
    constructor(
        public fullName: string,
        public email: string,
        public question: string,
        public others: string,
        public agency:string
        ) { }
}
