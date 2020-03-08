<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AerofleetController extends AbstractController
{
    /**
     * @Route("/", name="app_hompage")
     */
    public function homepage()
    {
        return $this->render('aerofleet/_homepage.html.twig', [
            'controller_name' => 'AerofleetController',
        ]);
    }
}
