// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    let total = 0;
    for (let num of this.array) {
      total += num;
    }
    return total;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      let side1 = this.array[0];
      let side2 = this.array[1];
      let side3 = this.array[2];

      return (
        side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2
      );
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      let side1 = this.array[0];
      let side2 = this.array[1];
      let side3 = this.array[2];
      let side4 = this.array[3];

      return side1 === side2 && side2 === side3 && side4 && side2 === side3;
    }
  }

  get area() {
      if(this.countSides === 4){
          return this.array[0] * this.array[1]
      }
  }
}
