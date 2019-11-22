<!DOCTYPE html>
<html>
<body>
    <?php
    //constants does not require dollarsign
    //case sensitive
    define ("WELCOME", "Hello my name is Haakon");
    echo WELCOME;
    echo "<hr />";

    //GLOBAL CONSTANT
    define ("CAR", "VOLVO");

    function mycar () {
        //function is printing the constant CAR defined with the value of VOLVO
        echo CAR;
    }
    //calling on the function
    mycar();

    ?>
</body>
</html>