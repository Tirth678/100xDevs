<!DOCTYPE html>
<html>
<head>
    <title>PHP Looping Structures</title>
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
    <h1>PHP Looping Structures Demo</h1>

    <!-- For Loop Example -->
    <h2>1. For Loop</h2>
    <div class="output">
        <?php
        echo "<h3>Counting from 1 to 5:</h3>";
        for($i = 1; $i <= 5; $i++) {
            echo "Number: $i <br>";
        }
        ?>
    </div>

    <!-- While Loop Example -->
    <h2>2. While Loop</h2>
    <div class="output">
        <?php
        echo "<h3>Countdown from 5 to 1:</h3>";
        $count = 5;
        while($count > 0) {
            echo "Countdown: $count <br>";
            $count--;
        }
        ?>
    </div>

    <!-- Do-While Loop Example -->
    <h2>3. Do-While Loop</h2>
    <div class="output">
        <?php
        echo "<h3>Rolling a dice until we get 6:</h3>";
        do {
            $roll = rand(1, 6);
            echo "Rolled: $roll <br>";
        } while($roll != 6);
        ?>
    </div>

    <!-- Foreach Loop Example -->
    <h2>4. Foreach Loop</h2>
    <div class="output">
        <?php
        echo "<h3>Iterating through an array:</h3>";
        $fruits = array("Apple", "Banana", "Orange", "Mango", "Grape");
        foreach($fruits as $index => $fruit) {
            echo "Fruit $index: $fruit <br>";
        }
        ?>
    </div>

    <!-- Nested Loop Example -->
    <h2>5. Nested Loops</h2>
    <div class="output">
        <?php
        echo "<h3>Multiplication Table (1-5):</h3>";
        for($i = 1; $i <= 5; $i++) {
            for($j = 1; $j <= 5; $j++) {
                echo "$i x $j = " . ($i * $j) . "&nbsp;&nbsp;&nbsp;";
            }
            echo "<br>";
        }
        ?>
    </div>

    <!-- Break and Continue Example -->
    <h2>6. Break and Continue</h2>
    <div class="output">
        <?php
        echo "<h3>Numbers 1-10 (skip even numbers, stop at 7):</h3>";
        for($i = 1; $i <= 10; $i++) {
            if($i % 2 == 0) {
                continue; // Skip even numbers
            }
            if($i > 7) {
                break; // Stop at 7
            }
            echo "Number: $i <br>";
        }
        ?>
    </div>
</body>
</html>