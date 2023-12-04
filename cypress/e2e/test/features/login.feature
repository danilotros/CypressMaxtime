Feature: Login Page

    Login on maxtime Page

Scenario: Succes Login
    Given A user open a maxtime website
    When A user enters the username "dgarciap" the password "TGGadll96$" and clic the login button
    Then A user should see that title of home page contains "Reporte de tiempos / Días pendientes por cerrar"

        