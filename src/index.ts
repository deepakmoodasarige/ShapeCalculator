abstract class Shape {
  side1: number;
  side2: number;
  constructor(side1: number, side2: number) {
    this.side1 = side1;
    this.side2 = side2;
  }
  abstract CalculateArea(): number;
}

class Rectangle extends Shape {
  length: number;
  breadth: number;
  constructor(length: number, breadth: number) {
    super(length, breadth);
    this.length = length;
    this.breadth = breadth;
  }
  CalculateArea() {
    return this.length * this.breadth;
  }
}

class Square extends Shape {
  side: number;
  constructor(side: number) {
    super(side, side);
    this.side = side;
  }
  CalculateArea() {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  radius: number;
  PIRadius: number;
  constructor(radius: number) {
    super(radius * Math.PI, radius);
    this.PIRadius = radius * Math.PI;
    this.radius = radius;
  }
  CalculateArea() {
    return this.PIRadius * this.radius;
  }
}

class Ellipse extends Shape {
  XAxis: number;
  YAxis: number;

  constructor(XAxis: number, YAxis: number) {
    super(Math.PI * XAxis, YAxis);
    this.XAxis = XAxis;
    this.YAxis = YAxis;
  }
  CalculateArea() {
    return Math.PI * this.XAxis * this.YAxis;
  }
}

let SelectedShape: string;

const EnableStep2 = () => {
  const divTobeEnabled: HTMLElement | any = document.getElementById(
    `${SelectedShape}-form`
  );
  divTobeEnabled.style.display = "block";
  const divStep1: HTMLElement | any = document.getElementById("step-1");
  divStep1.style.display = "none";
  const divStep2: HTMLElement | any = document.getElementById("step-2");
  divStep2.style.display = "block";
};

const EnableStep3 = (Area: number) => {
  const divstep3: HTMLElement | any = document.getElementById("step-3");
  divstep3.style.display = "block";
  const divResult: HTMLElement | any = document.getElementById("result-para");
  divResult.innerHTML = "The Area is :" + Area;
  const divTobeDisabled: HTMLElement | any = document.getElementById(
    `${SelectedShape}-form`
  );
  divTobeDisabled.style.display = "none";
  const divStep2: HTMLElement | any = document.getElementById("step-2");
  divStep2.style.display = "none";
};

const GetSelectedShape = () => {
  const shapeSelected: HTMLElement | any = document.querySelector(
    'input[name="area"]:checked'
  );
  SelectedShape = shapeSelected.value;
  EnableStep2();
};

const clear = () => {
  window.location.reload();
};

const calculateArea = () => {
  let Area = 0;
  if (SelectedShape === "circle") {
    const radiusTextbox: HTMLElement | any = document.getElementById(
      "value1-circle"
    );
    const SelShape = new Circle(radiusTextbox.value);
    Area = SelShape.CalculateArea();
  } else if (SelectedShape === "rectangle") {
    const lengthTextbox: HTMLElement | any = document.getElementById(
      "value1-rectangle"
    );
    const breadthTextbox: HTMLElement | any = document.getElementById(
      "value2-rectangle"
    );
    const SelShape = new Rectangle(lengthTextbox.value, breadthTextbox.value);
    Area = SelShape.CalculateArea();
  } else if (SelectedShape === "square") {
    const sideTextbox: HTMLElement | any = document.getElementById(
      "value1-square"
    );
    const SelShape = new Square(sideTextbox.value);
    Area = SelShape.CalculateArea();
  } else if (SelectedShape === "ellipse") {
    const XaxisTextbox: HTMLElement | any = document.getElementById(
      "value1-ellipse"
    );
    const YaxisTextbox: HTMLElement | any = document.getElementById(
      "value1-ellipse"
    );
    const SelShape = new Ellipse(XaxisTextbox.value, YaxisTextbox.value);
    Area = SelShape.CalculateArea();
  }
  EnableStep3(Area);
};
