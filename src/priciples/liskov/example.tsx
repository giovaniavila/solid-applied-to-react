export const codeSnippet = `// Base class
class Shape {
    area(): number {
        throw new Error("Method not implemented.");
    }
}

// Subclass for Circle
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Subclass for Rectangle
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

// Function to calculate the area of a shape
const calculateArea = (shape: Shape): number => {
    return shape.area();
};

// Main Component
const MyComponent: React.FC = () => {
    const [shape, setShape] = useState<Shape>(new Circle(5)); // Default shape is a Circle

    const handleSwitchShape = () => {
        setShape(new Rectangle(4, 6)); // Substitute with a Rectangle
    };

    return (
        <div>
            <h1>Area: {calculateArea(shape)}</h1>
            <button onClick={handleSwitchShape}>Change to Rectangle</button>
        </div>
    );
};
`;
