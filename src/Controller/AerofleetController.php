<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AerofleetController extends AbstractController
{
    /**
     * @Route("/", name="app_homepage")
     */
    public function homepage()
    {
        return $this->render('aerofleet/_homepage.html.twig', [
            'controller_name' => 'AerofleetController',
        ]);
    }

    /**
     * @Route("/english", name="app_english")
     */
    public function EnglishHomepage()
    {
        return $this->render('aerofleet/english/_homepage.html.twig', [
            'controller_name' => 'AerofleetEnglishController',
        ]);
    }

}