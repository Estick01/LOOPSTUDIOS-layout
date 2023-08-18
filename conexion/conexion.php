
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet"  href="Estilos.css">
    <meta charset="utf-8" />
    <title></title>
</head>
<style>
    
body {
	background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
	background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
	background-attachment: fixed;
	background-repeat: no-repeat;
	font-family: 'Vibur', cursive;
	font-family: 'Abel', sans-serif;
  opacity: .95;
  }
  
  .h1{
	  text-align: center;
	  text-transform: uppercase;
	  font-family: 'Playfair Display', serif;
	  color: #3e403f;
  }
  .form {
    width: 550px;
    min-height: 500px;
    height: auto;
    border-radius: 5px;
    margin: 2% auto;
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    padding: 2%;
    background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
}

.form .con {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 auto;
}
.btn {
    margin-right: 7px;
    position: relative;
    height: 50px;
    color: white;
    width: 150px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: transparent;
    font-size: 15px;
    overflow: hidden;
    transition: all 500ms ease;
    border: 2px solid #20e2d7;
    margin-bottom: 3px  ;
    z-index: 0;
    font-weight: 700;
    cursor: pointer;
    padding: 0 10px;
    transition: all .5s ease;
    text-align: center ;
  }
.btn::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    background-color: #20e2d7;
    transition: all 500ms ease;
    z-index: -1;
  }
.btn--1::before {
    width: 0;
    height: 100%;
  }
.btn--1:hover {
    color: #434343;
  }
.btn--1:hover::before {
    width: 100%;
  }
.abtn{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 10vh;
 }
</style>
<body>
<?php
$dat1=$_POST['nombre'];
$dat2=$_POST['apellido'];
$dat3=$_POST['direccion'];
$dat4=$_POST['telefono'];
$dat5=$_POST['correo'];


$servername = "localhost";
$dbname = "Datos";
$username = "root";
$password = "";
// Create connection
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
$sql = "INSERT INTO registro (nombre, apellido, direccion, telefono, correo) VALUES ('$dat1', '$dat2', '$dat3', '$dat4', '$dat5')";

 // use exec() because no results are returned
 $conn->exec($sql);
 }
catch(PDOException $e)
 {
 echo $sql . "<br>" . $e->getMessage();
 }

$conn = null;
?> 
  <table class="form">
            <h1 class="h1">Datos enviados</h1>
                <thead>
                    <tbody>
                        <tr class="tr">
                            <td>Nombre</td><td><?php echo "$dat1"?></td>
                        </tr>
                        <tr>
                            <td>Apellido</td><td><?php echo "$dat2"?></td>
                        </tr>
                        <tr>
                            <td>Dirreccion</td><td><?php echo "$dat3"?></td>
                        </tr>
                        <tr>
                            <td>telefono</td><td><?php echo "$dat4"?></td>
                        </tr>
                        <tr>
                            <td>correo</td><td><?php echo "$dat5"?></td>
                        </tr>
                    </tbody>
                </thead>
  </table>

  <a class="abtn" href="../inicio/Contactano.html"><button class="btn btn--1">regresar</button></a>
</body>
</html>