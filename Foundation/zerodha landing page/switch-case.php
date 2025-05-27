<!DOCTYPE html>
<html>
<head>
    <title>PHP Switch Case Examples</title>
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
            border-left: 4px solid #28a745;
            border-radius: 4px;
        }
        h2 {
            color: #2c3e50;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>PHP Switch Case Examples</h1>

    <!-- Basic Switch Case -->
    <h2>1. Basic Switch Case (Days of Week)</h2>
    <div class="output">
        <?php
        $day = date('l'); // Gets current day name
        
        switch($day) {
            case 'Monday':
                echo "It's Monday - Start of the work week";
                break;
            case 'Tuesday':
                echo "It's Tuesday - Second day of work";
                break;
            case 'Wednesday':
                echo "It's Wednesday - Middle of the week";
                break;
            case 'Thursday':
                echo "It's Thursday - Almost weekend";
                break;
            case 'Friday':
                echo "It's Friday - TGIF!";
                break;
            case 'Saturday':
            case 'Sunday':
                echo "It's Weekend - Time to relax!";
                break;
            default:
                echo "Invalid day";
        }
        ?>
    </div>

    <!-- Grade Calculator -->
    <h2>2. Grade Calculator</h2>
    <div class="output">
        <?php
        $score = 85;
        
        switch(true) {
            case ($score >= 90):
                $grade = 'A';
                break;
            case ($score >= 80):
                $grade = 'B';
                break;
            case ($score >= 70):
                $grade = 'C';
                break;
            case ($score >= 60):
                $grade = 'D';
                break;
            default:
                $grade = 'F';
        }
        
        echo "Score: $score<br>";
        echo "Grade: $grade";
        ?>
    </div>

    <!-- Month Calculator -->
    <h2>3. Month Days Calculator</h2>
    <div class="output">
        <?php
        $month = date('F'); // Gets current month name
        
        switch($month) {
            case 'April':
            case 'June':
            case 'September':
            case 'November':
                $days = 30;
                break;
            case 'February':
                $days = (date('L') == 1) ? 29 : 28; // Check for leap year
                break;
            default:
                $days = 31;
        }
        
        echo "Month: $month<br>";
        echo "Number of days: $days";
        ?>
    </div>

    <!-- Calculator Operations -->
    <h2>4. Simple Calculator</h2>
    <div class="output">
        <?php
        $num1 = 10;
        $num2 = 5;
        $operation = '+';
        
        switch($operation) {
            case '+':
                $result = $num1 + $num2;
                $operator = 'Addition';
                break;
            case '-':
                $result = $num1 - $num2;
                $operator = 'Subtraction';
                break;
            case '*':
                $result = $num1 * $num2;
                $operator = 'Multiplication';
                break;
            case '/':
                $result = $num2 != 0 ? $num1 / $num2 : "Cannot divide by zero";
                $operator = 'Division';
                break;
            default:
                $result = "Invalid operation";
                $operator = 'Unknown';
        }
        
        echo "$operator: $num1 $operation $num2 = $result";
        ?>
    </div>
</body>
</html>