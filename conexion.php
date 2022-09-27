<?php
    function Conectar (){
        $conexion = null;
        $host = '127.0.0.1';
        $db = 'erm_db';
        $user = 'root';
        $pwd = 'admin';
        try {
            $conexion = new PDO('mysql:host='.$host.';dbname='.$db, $user, $pwd);
            //echo "Conectado con exito";
        }
        catch (PDOException $e) {
            echo '<p>No se puede comunicar con el servidor!!</p>';
            exit;
        }
        return $conexion;
    }

    /*
    $cn = mysql_conect('localhost','root','');
    mysql_set_charset("UTF8", $cn);
    mysql_select_db('erm_db',$cn)*/
?>