package web;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class FirstServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html");

        String reponsenomcours = request.getParameter("nom");

        double note1double = Double.parseDouble(request.getParameter("note1"));

        double note2double = Double.parseDouble(request.getParameter("note2"));

        double note3double = Double.parseDouble(request.getParameter("note3"));

        double moyenne = (note1double * 0.3 + note2double * 0.3 + note3double * 0.4);

        String moyenneformater = String.format("%.2f", moyenne);

        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Cours : " + reponsenomcours + "</h1>");
        out.println("<h1>Note 1 : " + note1double + "</h1>");
        out.println("<h1>Note 2 : " + note2double + "</h1>");
        out.println("<h1>Note 3 : " + note3double + "</h1>");
        out.println("<h1>Moyenne générale : " + moyenneformater + "</h1>");
        out.println("</body></html>");
        
        // Exemple : http://localhost:8080/TP1_JEE/FirstServlet?nom=JEE&note1=10.0&note2=10.0&note3=10.0
    }
}
