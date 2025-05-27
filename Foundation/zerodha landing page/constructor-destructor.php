<!DOCTYPE html>
<html>
<head>
    <title>PHP Constructor and Destructor Demo</title>
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
        .log {
            color: #666;
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>PHP Constructor and Destructor Example</h1>

    <div class="output">
        <?php
        class DatabaseConnection {
            private $connection;
            private $connectionId;
            
            // Constructor
            public function __construct($host, $username) {
                $this->connectionId = uniqid();
                $this->connection = true; // Simulating database connection
                
                echo "<p class='log'>Constructor called: Creating database connection (ID: {$this->connectionId})</p>";
                echo "<p>Connected to database as {$username} on {$host}</p>";
            }
            
            // Destructor
            public function __destruct() {
                $this->connection = null; // Simulating closing connection
                echo "<p class='log'>Destructor called: Closing database connection (ID: {$this->connectionId})</p>";
            }
            
            public function query($sql) {
                echo "<p>Executing query on connection {$this->connectionId}: {$sql}</p>";
            }
        }

        class FileLogger {
            private $logFile;
            private $timestamp;
            
            // Constructor with default parameter
            public function __construct($filename = 'app.log') {
                $this->timestamp = date('Y-m-d H:i:s');
                $this->logFile = $filename;
                
                echo "<p class='log'>Constructor called: Initializing logger for {$filename}</p>";
                echo "<p>Logger started at {$this->timestamp}</p>";
            }
            
            // Destructor
            public function __destruct() {
                echo "<p class='log'>Destructor called: Closing log file {$this->logFile}</p>";
                echo "<p>Logger stopped at " . date('Y-m-d H:i:s') . "</p>";
            }
            
            public function log($message) {
                echo "<p>Logging: {$message} to {$this->logFile}</p>";
            }
        }

        // Demonstrating constructor and destructor in action
        echo "<h2>Creating Objects and Using Methods</h2>";
        
        // Create database connection
        $db = new DatabaseConnection('localhost', 'admin');
        $db->query("SELECT * FROM users");
        
        // Create logger with default filename
        $logger1 = new FileLogger();
        $logger1->log("Application started");
        
        // Create logger with custom filename
        $logger2 = new FileLogger('custom.log');
        $logger2->log("Custom logging");
        
        echo "<h2>End of Script</h2>";
        echo "<p>Objects will be destroyed automatically...</p>";
        // Destructors will be called automatically when script ends
        ?>
    </div>
</body>
</html>