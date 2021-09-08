export class Movie {
    public name: string; 
    public description: string;
    public premieredTime: string;
    public imagePath: string;
    
    constructor( name: string, desc: string,premieredTime: string, imagePath: string){
        this.name = name; 
        this.description = desc;
        this.premieredTime = premieredTime;
        this.imagePath = imagePath;
    };
}