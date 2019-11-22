<!DOCTYPE HTML>
<html>
    <head>
        <title>Introduction to OOP</title>
        <style>
        .pleb {
            color: green;
            margin-left: 40px;
            text-align:center;
            }

        body {
            background-color: #b0abab;
        }

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 2.5rem;
            font-size: 30px;
            text-align:center;
            color: cyan;

        }

        </style>
    </head>
    <body>
        <div class="pleb">
        <?php
        
            // Creating class
            class person {
                // Class properties - (variables tied to object)
                public $firstname;
                public $lastname;
                public $age;

                // Assigning values to the property variables (a public function construct)
                public function __construct ($firstname, $lastname, $age) {
                    $this-> firstname = $firstname;
                    $this-> lastname = $lastname;
                    $this-> age = $age;
                }

                // Create a method (function tied to an object)
                public function hello() {
                    return "I am " . $this-> firstname . " " . $this-> lastname . "." . " My age is " . $this-> age . ".";
                }
            }

            // template to create person. Vars are fname, lname and age.
            // These would usually derive from a database
            $person1 = new person ("john", "Smith", 30);
            $person2 = new person ("Haakon", "Aareskjold", 25);

            //prints out what the hello method returns
            echo "<h1>" . $person1->hello() . "</h1>";
            echo "<br>";
            echo "<h1>" . $person2->hello() . "</h1>";
        
        ?>
        </div>
    </body>
    <footer>
        <h2>Made by Haakon</h2>
    </footer>
</html>