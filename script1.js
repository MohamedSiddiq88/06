class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating==undefined){
            this.rating="PG";
        }
    }
    //getpg
    getPG(arr){
        let temp=[];
        for(let i=0;i<arr.length;i++){
        if(arr[i].rating=="PG"){
            temp.push(arr[i]);
            }
        }
        return temp;
    }
}
//arry of instances
let movierr=[
    new Movie("Casino Royale","Eon Productions","PG­13"),
    new Movie("The Shawshank Redemption", "Columbia Pictures", "R"),
    new Movie("The Dark Knight", "Warner Bros.", "PG13"),
    new Movie("Iron-Man","Marvel",)//this movies doesen't have rating==>instruction (b)==>default rating is "PG"
]
console.log(new Movie().getPG(movierr));