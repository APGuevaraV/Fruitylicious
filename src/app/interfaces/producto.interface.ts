
export interface Producto{
    id :string;
    name:string;
    desc:string;
    price:number;
    image:string;
    
}

export class Usuario{
    id?:string;
    email:string;
    password:string;
}