<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    require_once("../conexion.php");
    require_once("../modelos/notas.php");

    $control = $_GET['control'];

    $notas = new notas($conexion);

    switch ($control) {
        case 'consulta':
            $vec = $notas->consultar();
        break;

        case 'insertar':
            //$json = file_get_contents('php://input');
            //para ensayar.. 
            $json = '{fecha:12/06/2024,fecha:2022-01-15,hora:14:30:00}';
            $params = json_decode($json);
            $vec = $notas->insertar($params);
        break;

        case 'eliminar':
            $id = $_GET['id'];
            $vec = $notas->eliminar($id);
        break;

        case 'editar':
            $json = file_get_contents('php://input');
            $params = json_decode($json);
            $id = $_GET['id'];
            $vec = $notas->editar($id, $params);
        break;

        case 'filtro':
            $dato = $_GET['dato'];
            $vec = $notas->filtro($dato);
        break;
    }

    $datosj = json_encode($vec);
    echo $datosj;
    header('Content-Type: application/json');


?>