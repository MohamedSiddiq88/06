console.log("calculate uber price");
class Uber{
    constructor(km,perkm,sp,ep,tm){
        this.km=km;
        this.perkm=perkm;
        this.sp=sp;
        this.ep=ep;
        this.tm=tm;
    }
getPrice(){
    // return `RS ${this.km*this.perkm} for ${this.km} km`;
    return `
    from ${this.sp} to ${this.ep} total km is ${this.km}
    and it will take ${this.tm}
    and the total fare is ${this.km*this.perkm}`;
}
}
console.log(new Uber(4.5,10,"Guindy","Velachery","9 min").getPrice())//first argument is total km and second one is per km price