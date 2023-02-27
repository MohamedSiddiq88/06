
class Circle{
        constructor(radius,color){
            this.radius=radius;
            this.color=color;
        }
        getDiameter(){
            return 2*this.radius;
        }
        getArea(){
            return Math.PI*Math.pow(this.radius,2);
        }
        getCircumference(){
            return 2*Math.PI*this.radius;
        }

    }
let c=new Circle(5,"red");
console.log(`     
     Diameter : ${c.getDiameter()}
         Area : ${c.getArea()}
Circumference : ${c.getCircumference()}`);