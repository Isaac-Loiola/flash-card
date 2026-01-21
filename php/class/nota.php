<?php 
include "db.php";

class Nota{
    public $idCard;
    public $nota;
    public $notaMaxima;

    private $pdo;

    function __construct()
    {
        $this->pdo = getConnection();
    }

    function inserir() : bool{
        $sql = "insert  notas value (:id_card, :nota, :nota_maxima)";
        $cmd = $this->pdo->prepare($sql);
        $cmd->bindValue(':id_card', $this->idCard);
        $cmd->bindValue(':nota', $this->nota);
        $cmd->bindValue(':nota_maxima', $this->notaMaxima);
        return $cmd->execute();
    } 

    function listar() : array{
        $sql = "select * from notas";
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