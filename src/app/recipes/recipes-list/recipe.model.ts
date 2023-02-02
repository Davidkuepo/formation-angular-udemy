


export class Recipe {
  public Name:string;
  public description: string;
  public imagepath:string;

  constructor(name:string,description:string,imagepath:string){
    this.Name= name;
    this.description= description;
    this.imagepath = imagepath
  }
}
