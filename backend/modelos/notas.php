<?php
    class Notas{
        //Atributo
        public $conexion;

        //Metodo constructor
        public function __construct($conexion) {
            $this->conexion = $conexion;
        }
        //Metodos
        public function consultar() {
            $con = "SELECT * FROM notas ORDER BY id_nota";
            $res = mysqli_query($this->conexion, $con);
            $vec = [];

            while($row = mysqli_fetch_array($res)) {
                $vec[] = $row;
            }
            return $vec;
        }

        public function eliminar($id){
            $del = "DELETE FROM notas WHERE id_nota = $id";
            mysqli_query($this->conexion, $del);
            $vec = [];
            $vec['resultado'] = "OK";
            $vec['mensaje'] = "El usuario se elimino";
            return $vec;
        }

        public function insertar($params){
            $ins = "INSERT INTO notas(fecha,hora,importancia,nota)
            VALUES($params->fecha,$params->hora,$params->importancia,'$params->nota')";
            mysqli_query($this->conexion, $ins);
            $vec = [];
            $vec['resultado'] = "OK";
            $vec['mensaje'] = "El usuario a sido guardado";
            return $vec;
        }

        public function editar($id,$params){
            $editar = "UPDATE notas SET id_nota = '$params->id_nota', fecha = '$params->fecha',
            hora = '$params->hora', importancia = '$params->importancia' WHERE id_notas = $id)";
            mysqli_query($this->conexion, $editar);
            $vec = [];
            $vec['resultado'] = "OK";
            $vec['mensaje'] = "El usuario a sido editado";
            return $vec;
        }

        public function filtro($valor){
            $filtro = "SELECT * FROM notas WHERE id_notas LIKE '%$valor%'";
            $res = mysqli_query($this->conexion,$filtro);
            $vec = [];

            while($row = mysqli_fetch_array($res)){
                $vec[] = $row;
            }
            return $vec;
        }
    }
?>