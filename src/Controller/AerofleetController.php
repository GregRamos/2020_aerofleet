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
    public function homepage(Request $request)
    {
        $locale = $request->getLocale();
        var_dump($locale);
        return $this->render('aerofleet/_homepage.html.twig', [
            'controller_name' => 'AerofleetController',
            'locale' => $locale,
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