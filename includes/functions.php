<?php
    //store the results
    $result = array();
    
    function getCarData($conn, $car) {
        
        if (is_null($car)) {
            $query = "SELECT * FROM tbl_cars";
        } else {
            $query = "SELECT * FROM profs WHERE id='".$car."'";
        };

        // $query = is_null($prof) ? "SELECT * FROM profs" : "SELECT * FROM profs WHERE id='".$prof."'";
        
        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }
