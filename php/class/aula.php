<?php 
include 'db.php';

class Aula{
    public $id;
    public $numero;
    public $ativo;

    private $pdo;

    function __construct()
    {
        $this->pdo = getConnection();
    }

    function listar() : array {
        $sql = "select * from aulas";
        $cmd = $this->pdo->prepare($sql);
        $cmd->execute();
        $data = $cmd->fetchAll();
        if(count($data) <= 0){
            $data = [];
        }
        return $data;
    } 
} 
?>