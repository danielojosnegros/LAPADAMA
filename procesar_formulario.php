<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Conexión a la base de datos
    $servername = "sql304.infinityfree.com";
    $username = "if0_37723705";
    $password = 'Lapadama2024';
    $dbname = "proyecto";
    $port = 3306;

    $conn = new mysqli($servername, $username, $password, $dbname, $port);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    $sql = "INSERT INTO contactos (nombre, telefono, email, mensaje) VALUES ('$nombre', '$telefono', '$email', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        // Procesar el formulario y mostrar el HTML con el modal
        $modalContent = "<h1>Mensaje de confirmación de la reserva</h1>
        <p id='mensajeReserva'>Apreciado/a $nombre, le confirmamos que se ha realizado su consulta. Recibirá un correo de confirmación de su consulta en la dirección: $email. Pronto nos pondremos en contacto con usted al teléfono: $telefono.</p>
        <button onclick='redirigir()'>Empieza</button>";

        echo "<script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('modalReserva').style.display = 'block';
            document.getElementById('modalBoxR').innerHTML = `$modalContent`;
        });

        function redirigir() {
            window.location.href = 'index.html';
        }
        </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
<link rel="stylesheet" href="CSS/Style.css">
<section id="contacto">
    <link rel="stylesheet" href="CSS/Style.css">
    <h2 class="tituloPagina" data-aos="fade-up">CONTACTO</h2>
<!-- COPIAMOS LA PARTE DEL MAPA E INTRODUCIMOS -->
    <div id="contenedorContacto">
        <iframe  data-aos="fade-up" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8592.296888548699!2d-3.695199450002235!3d40.41249045658557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289d4ba9e17f%3A0x4f1a5519094302c0!2sEducaci%C3%B3n%2C%20Retiro%2C%2028014%20Madrid!5e0!3m2!1ses!2ses!4v1709836117632!5m2!1ses!2ses" width="600" height="525" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <form  data-aos="fade-up" action="procesar_formulario.php" method="post" id="formulario">
            
            <p id="textoReservas">Reservas:</p>

            <input id="formNombre" type="text" name="nombre" placeholder="Nombre y Apellidos" required>
            <input id="formNumero" type="number" name="telefono" placeholder="Telefono" required>
            <input id="formEmail" type="email" name="email" placeholder="Email" required>
            <input id="formMensaje" type="text" name="mensaje" placeholder="Mensaje" required>
            <input id="botonEnviar" value="Enviar">
        </form>
    </div>

<!-- modal de reserva-->
    <div id="modalReserva">
        <div id="modalBoxR"></div>
    </div>
</section>


