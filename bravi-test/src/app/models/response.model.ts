export class ResponseModel {
    message?: string;
    error?: any;
    data?: any;

    constructor(message?: string, error?: any, data?: any){
        this.message = message;
        this.error = error;
        this.data = data;
    }
}