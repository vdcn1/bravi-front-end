
export default class User{
    private name: string;
    private gender: string;
    private avatar?: string;
    private email: string;
    private contacts: [Contacts]

    constructor
    (
        name: string,
        gender: string,
        email: string,
        contacts: [Contacts],
        avatar?: string,
    ){
        this.name = name;
        this.avatar = avatar;
        this.contacts = contacts;
        this.email = email;
        this.gender = gender;
    }

    public get getName(){
        return this.name;
    }

    public get getGender(){
        return this.gender;
    }

    public get getAvatar(){
        return this.avatar;
    }

    public get getEmail(){
        return this.email;
    }

    public get getContacts(){
        return this.contacts;
    }

    public set setGender(newGender: string){
        this.gender = newGender;
    }
}

export class Contacts{
    private email: string;
    private phone?: string;
    private whatsapp?: string;

    constructor(email: string, phone?: string, whatsapp?: string){
        this.email = email;
        this.phone = phone;
        this.whatsapp = whatsapp;
    }
    public get getPhone(){
        return this.phone;
    }

    public get getEmail(){
        return this.email;
    }

    public get getWhatsapp(){
        return this.whatsapp;
    }
}