<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    require_once("../conexion.php");
    require_once("../modelos/citas.php");

    $control = $_GET['control'];

    $cita = new cita($conexion);

    switch ($control) {
        case 'consulta':
            $vec = $cita->consulta();
        break;

        case 'insertar':
            $json = file_get_contents('php://input');
            $params = json_decode($json);
            $vec = $cita->insertar($params);
        break;

        case 'eliminar':
            $id = $_GET['id'];
            $vec = $cita->eliminar($id);
        break;

        case 'editar':
            $json = file_get_contents('php://input');
            $params = json_decode($json);
            $id = $_GET['id'];
            $vec = $cita->editar($id, $params);
        break;

        case 'filtro':
            $dato = $_GET['dato'];
            $vec = $cita->filtro($dato);
        break;
    }

    $datosj = json_encode($vec);
    echo $datosj;
    header('Content-Type: application/json');


?>