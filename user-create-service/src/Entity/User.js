module.exports = class User{
    _name = '';
    _email = '';
    _phone = '';

    constructor({name , email , phone}){
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

    get phone(){
        return this._phone;
    }
}
