<?php
    class usuarios{
        //Atributo
        public $conexion;

        //Metodo constructor
        public function __construct($conexion) {
            $this->conexion = $conexion;
        }
        //Metodos
        public function consulta() {
            $con = "SELECT * FROM usuarios ORDER BY nombre";
            $res = mysqli_query($this->conexion, $con);
            $vec = [];

            while($row = mysqli_fetch_array($res)) {
                $vec[] = $row;
            }
            return $vec;
        }

        public function eliminar($id){
            $del = "DELETE FROM usuarios WHERE id_usuario = $id";
            mysqli_query($this->conexion, $del);
            $vec = [];
            $vec['resultado'] = "OK";
            $vec['mensaje'] = "El usuario se elimino";
            return $vec;
        }

        public function insertar($params){
            $ins = "INSERT INTO usuarios(nombre,correo,contrasena)
                    VALUES('$params->nombre','$params->correo','$params->contrasena')";
            mysqli_query($this->conexion, $ins);
            $vec = [];
            $vec["resultado"] = "OK";
            $vec["mensaje"] = "El usuario a sido guardado";
            return $vec;
        }

        public function editar($id,$params){
            $editar = "UPDATE usuarios SET nombre = '$params->nombre', correo = '$params->correo', contrasena = '$params->contrasena' WHERE id_usuario = $id";
            mysqli_query($this->conexion, $editar);
            $vec = [];
            $vec['resultado'] = "OK";
            $vec['mensaje'] = "El usuario a sido editado";
            return $vec;
        }

        public function filtro($valor){
            $filtro = "SELECT * FROM usuarios WHERE nombre LIKE '%$valor%'";
            $res = mysqli_query($this->conexion,$filtro);
            $vec = [];

            while($row = mysqli_fetch_array($res)){
                $vec[] = $row;
            }
            return $vec;
        }
    }
?>