<?php

    function getDBConnection () {
        $Path = dirname(__DIR__) . '/.env';
        $env = parse_ini_file($Path, false, INI_SCANNER_RAW);

        if ($env === false) {
            die('{"error": ".env file is missing"}');
        }

        $conn = new mysql($env['DB_HOST'] ?? '', $env['DB_USER'] ?? '', $env['DB_PASS'] ?? '', $env['DB_NAME'] ?? '', );

        if ($conn->connect_error) {
            die('{"error":"Database connection failed"}');
        }

        return $conn;
    }
    
?>