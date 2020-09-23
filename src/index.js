var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, breadth) {
        var _this = _super.call(this, length, breadth) || this;
        _this.length = length;
        _this.breadth = breadth;
        return _this;
    }
    Rectangle.prototype.CalculateArea = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, side, side) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.CalculateArea = function () {
        return this.side * this.side;
    };
    return Square;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, radius * Math.PI, radius) || this;
        _this.PIRadius = radius * Math.PI;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.CalculateArea = function () {
        return this.PIRadius * this.radius;
    };
    return Circle;
}(Shape));
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(XAxis, YAxis) {
        var _this = _super.call(this, Math.PI * XAxis, YAxis) || this;
        _this.XAxis = XAxis;
        _this.YAxis = YAxis;
        return _this;
    }
    Ellipse.prototype.CalculateArea = function () {
        return Math.PI * this.XAxis * this.YAxis;
    };
    return Ellipse;
}(Shape));
var SelectedShape;
var EnableStep2 = function () {
    var divTobeEnabled = document.getElementById(SelectedShape + "-form");
    divTobeEnabled.style.display = "block";
    var divStep1 = document.getElementById('step-1');
    divStep1.style.display = "none";
    var divStep2 = document.getElementById('step-2');
    divStep2.style.display = "block";
};
var EnableStep3 = function (Area) {
    var divstep3 = document.getElementById('step-3');
    divstep3.style.display = "block";
    var divResult = document.getElementById('result-para');
    divResult.innerHTML = "The Area is :" + Area;
    var divTobeDisabled = document.getElementById(SelectedShape + "-form");
    divTobeDisabled.style.display = "none";
    var divStep2 = document.getElementById('step-2');
    divStep2.style.display = "none";
};
var GetSelectedShape = function () {
    var shapeSelected = document.querySelector('input[name="area"]:checked');
    SelectedShape = shapeSelected.value;
    EnableStep2();
};
var clear = function () {
    window.location.reload();
};
var calculateArea = function () {
    var Area = 0;
    if (SelectedShape === "circle") {
        var radiusTextbox = document.getElementById('value1-circle');
        var SelShape = new Circle(radiusTextbox.value);
        Area = SelShape.CalculateArea();
    }
    else if (SelectedShape === "rectangle") {
        var lengthTextbox = document.getElementById('value1-rectangle');
        var breadthTextbox = document.getElementById('value2-rectangle');
        var SelShape = new Rectangle(lengthTextbox.value, breadthTextbox.value);
        Area = SelShape.CalculateArea();
    }
    else if (SelectedShape === "square") {
        var sideTextbox = document.getElementById('value1-square');
        var SelShape = new Square(sideTextbox.value);
        Area = SelShape.CalculateArea();
    }
    else if (SelectedShape === "ellipse") {
        var XaxisTextbox = document.getElementById('value1-ellipse');
        var YaxisTextbox = document.getElementById('value1-ellipse');
        var SelShape = new Ellipse(XaxisTextbox.value, YaxisTextbox.value);
        Area = SelShape.CalculateArea();
    }
    EnableStep3(Area);
};
