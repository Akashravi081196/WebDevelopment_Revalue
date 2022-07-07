
export class Product {

    id: String;
    name: String;
    description: String;
    price: Number;
    userid: String;
    isEditable: Boolean

    constructor(id: String, name: String, description: String, price: Number, userid: string, isEditable: Boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.userid = userid;
        this.isEditable = isEditable;
    }
}