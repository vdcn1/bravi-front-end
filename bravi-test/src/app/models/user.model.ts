
export default class User{
    private name: string;
    private gender: string;
    private avatar?: string;
    private email: string;
    private contacts: [{
        email: string;
        phone?: string;
        whatsapp?: string;
    }]

    constructor
    (
        name: string,
        gender: string,
        email: string,
        contacts: [{
            email: string;
            phone?: string;
            whatsapp?: string;
        }],
        avatar?: string,
    ){
        this.name = name;
        this.avatar = avatar;
        this.contacts = contacts;
        this.email = email;
        this.gender = gender;
    }
}