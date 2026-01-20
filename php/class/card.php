<?php 
include 'db.php';

class Card{
    public $id;
    public $idAula;
    public $palavraEn;
    public $palavraPt;
    public $audio;

    private $pdo;

    function __contruct(){
        $this->pdo = getConnection();
    }

    function listar() : array{
        $sql = "select * from cards";
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