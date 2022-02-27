<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MyItemsController {


  public function items(): Response {
    $list = ['test', 'values'];
    return new Response(json_encode($list));
  }

  /** 
   * @Route("/api/itemsByName")
  */
  public function itemsByName(): Response {
    $list = ['test', 'values']; // from db
    return new Response(json_encode($list));
  }

}


?>