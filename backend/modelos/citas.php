<?php
    class cita{
        //Atributo
        public $conexion;

        //Metodo constructor
        public function __construct($conexion) {
            $this->conexion = $conexion;
        }
        //Metodos
        public function consulta() {
            $con = "SELECT * FROM cita ORDER BY fecha";
            $res = mysqli_query($this->conexion, $con);
            $vec = [];

            while($row = mysqli_fetch_array($res)) {
                $vec[] = $row;
            }
            return $vec;
        }

        public function eliminar($id){
            $del = "DELETE FROM cita WHERE id_citas = $id";
            mysqli_query($this->conexion, $del);
            $vec = [];
            $vec['resultado'] = "OK";
            $vec['mensaje'] = "El usuario se elimino";
            return $vec;
        }

        public function insertar($params){
            $ins = "INSERT INTO cita(fecha,hora,nota)
                    VALUES('$params->fecha','$params->hora','$params->nota')";
            mysqli_query($this->conexion, $ins);
            $vec = [];
            $vec["resultado"] = "OK";
            $vec["mensaje"] = "El usuario a sido guardado";
            return $vec;
        }

        public function editar($id,$params){
            $editar = "UPDATE cita SET fecha = '$params->fecha', hora = '$params->hora', nota = '$params->nota' WHERE id_citas = $id";
            mysqli_query($this->conexion, $editar);
            $vec = [];
            $vec['resultado'] = "OK";
            $vec['mensaje'] = "El usuario a sido editado";
            return $vec;
        }

        public function filtro($valor){
            $filtro = "SELECT * FROM cita WHERE fecha LIKE '%$valor%'";
            $res = mysqli_query($this->conexion,$filtro);
            $vec = [];

            while($row = mysqli_fetch_array($res)){
                $vec[] = $row;
            }
            return $vec;
        }
    }
?>