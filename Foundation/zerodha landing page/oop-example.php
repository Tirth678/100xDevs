<!DOCTYPE html>
<html>
<head>
    <title>PHP OOP Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .output {
            background-color: #f5f5f5;
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #007bff;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>PHP Classes, Objects, and Inheritance Demo</h1>

    <div class="output">
        <?php
        // Parent Class
        class Vehicle {
            protected $brand;
            protected $model;
            protected $year;
            
            public function __construct($brand, $model, $year) {
                $this->brand = $brand;
                $this->model = $model;
                $this->year = $year;
            }
            
            public function getInfo() {
                return "Vehicle: {$this->year} {$this->brand} {$this->model}";
            }
            
            public function startEngine() {
                return "The {$this->brand} engine is starting...";
            }
        }

        // Child Class
        class Car extends Vehicle {
            private $numDoors;
            
            public function __construct($brand, $model, $year, $numDoors) {
                parent::__construct($brand, $model, $year);
                $this->numDoors = $numDoors;
            }
            
            public function getInfo() {
                return parent::getInfo() . " with {$this->numDoors} doors";
            }
            
            public function honk() {
                return "Beep! Beep!";
            }
        }

        // Another Child Class
        class Motorcycle extends Vehicle {
            private $type;
            
            public function __construct($brand, $model, $year, $type) {
                parent::__construct($brand, $model, $year);
                $this->type = $type;
            }
            
            public function getInfo() {
                return parent::getInfo() . " ({$this->type} motorcycle)";
            }
            
            public function wheelie() {
                return "Performing a wheelie!";
            }
        }

        // Creating Objects and Demonstrating Usage
        echo "<h2>Creating and Using Objects</h2>";
        
        // Create a Car object
        $car = new Car("Toyota", "Camry", 2023, 4);
        echo "<p>" . $car->getInfo() . "</p>";
        echo "<p>" . $car->startEngine() . "</p>";
        echo "<p>" . $car->honk() . "</p>";
        
        // Create a Motorcycle object
        $motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2023, "Cruiser");
        echo "<p>" . $motorcycle->getInfo() . "</p>";
        echo "<p>" . $motorcycle->startEngine() . "</p>";
        echo "<p>" . $motorcycle->wheelie() . "</p>";

        // Demonstrating Inheritance
        echo "<h2>Demonstrating Inheritance</h2>";
        
        function testVehicle(Vehicle $vehicle) {
            echo "<p>Testing vehicle:</p>";
            echo "<p>" . $vehicle->getInfo() . "</p>";
            echo "<p>" . $vehicle->startEngine() . "</p>";
        }

        testVehicle($car);
        testVehicle($motorcycle);
        ?>
    </div>
</body>
</html>