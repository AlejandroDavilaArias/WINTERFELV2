<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    require_once("../conexion.php");
    require_once("../modelos/usuarios.php");

    $control = $_GET['control'];

    $usuarios = new usuarios($conexion);

    switch ($control) {
        case 'consulta':
            $vec = $usuarios->consulta();
        break;

        case 'insertar':
            $json = file_get_contents('php://input');
            //Para insertar //$json = '{"nombre":"prueba3","correo":"davil45@gmail.com","contrasena":"4321"}';
            $params = json_decode($json);
            $vec = $usuarios->insertar($params);
        break;

        case 'eliminar':
            $id = $_GET['id'];
            $vec = $usuarios->eliminar($id);
            //Para eliminar ?control=eliminar&id=11
        break;

        case 'editar':
            $json = file_get_contents('php://input');
            //Para editar $json = '{"nombre":"prueba3","correo":"davil46@hotmail.com","contrasena":"1234567"}';
            $params = json_decode($json);
            $id = $_GET['id'];
            $vec = $usuarios->editar($id, $params);
            //Para editar ?control=editar&id=1
        break;

        case 'filtro':
            $dato = $_GET['dato'];
            $vec = $usuarios->filtro($dato);
        break;
    }

    $datosj = json_encode($vec);
    echo $datosj;
    header('Content-Type: application/json');


?>