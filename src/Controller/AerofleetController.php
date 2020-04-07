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
        return $this->render('aerofleet/_homepage.html.twig', [
            'controller_name' => 'AerofleetController',
            'locale' => $locale,
        ]);
    }

    /**
     * @Route("/change_locale/{locale}", name="change_locale")
     */
    public function changeLocale($locale, Request $request)
    {
        // On stocke la langue dans la session
        $request->getSession()->set('_locale', $locale);

        // On revient sur la page précédente
        return $this->redirect($request->headers->get('referer'));
    }



}