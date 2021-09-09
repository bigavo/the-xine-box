export class Movie {
    public name: string; 
    public id: number;
    public description: string;
    public premieredTime: string;
    public imagePath: string;
    public votes: number;
    public backdrop_path: string;
    public language: string;
    // public popularity: number;
        constructor( name: string, id:number, desc: string,premieredTime: string, imagePath: string, votes:number, backdrop_path:string){
        this.name = name; 
        this.id = id;
        this.description = desc;
        this.premieredTime = premieredTime;
        this.imagePath = imagePath;
        this.votes = votes;
        this.backdrop_path = backdrop_path;
    };
}