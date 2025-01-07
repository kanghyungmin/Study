import { Query } from "src/eventsourcing/core/Query";



export class QueryAccount extends Query{

    //
    private no : string;

    constructor(no : string) {
        super();
        this.no = no;
    }

    public setNo(no: string) {
        this.no = no;
    }
    public getNo(): string {
        return this.no;
    }
}
