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
}
?>