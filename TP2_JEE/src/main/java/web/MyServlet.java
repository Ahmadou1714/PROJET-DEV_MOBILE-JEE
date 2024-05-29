package web;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name="ms", urlPatterns={"/controleur"})
public class MyServlet extends HttpServlet {

    /**
	 * 
	 */
	private static final long serialVersionUID = 8834640956074416819L;

	@Override 
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String L = request.getParameter("login");
        String p = request.getParameter("password");
        L = new String(" servelet ") + L;
        p = new String("servelet") + p;  
        request.setAttribute("logins", L);
        request.setAttribute("passwords", p);

        request.getRequestDispatcher("vue.jsp").forward(request, response);
    }
}
