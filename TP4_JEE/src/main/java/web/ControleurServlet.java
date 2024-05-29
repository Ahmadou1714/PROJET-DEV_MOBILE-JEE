package web;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import dao.IProduitDao;
import dao.ProduitDaoImpl;
import metier.entities.Produit;

@WebServlet(name = "cs", urlPatterns = { "/controleur", "*.do" })
public class ControleurServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private IProduitDao metier;

    @Override
    public void init() throws ServletException {
        metier = new ProduitDaoImpl();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String path = request.getServletPath();
        if (path.equals("/index.do")) {
            request.getRequestDispatcher("produits.jsp").forward(request, response);
        } else if (path.equals("/chercher.do")) {
            String motCle = request.getParameter("motCle");
            ProduitModele model = new ProduitModele();
            model.setMotCle(motCle);
            List<Produit> prods = metier.produitsParMC(motCle);
            model.setProduits(prods);
            request.setAttribute("model", model);
            request.getRequestDispatcher("produits.jsp").forward(request, response);
        } else if (path.equals("/saisie.do")) {
            request.getRequestDispatcher("saisieProduit.jsp").forward(request, response);
        } else if (path.equals("/save.do") && request.getMethod().equals("POST")) {
            String nom = request.getParameter("nom");
            double prix = Double.parseDouble(request.getParameter("prix"));
            Produit p = metier.save(new Produit(nom, prix));
            request.setAttribute("produit", p);
            request.getRequestDispatcher("confirmation.jsp").forward(request, response);
        } else if (path.equals("/supprimer.do")) {
            Long id = Long.parseLong(request.getParameter("id"));
            metier.deleteProduit(id);
            response.sendRedirect("chercher.do?motCle=");
        } else if (path.equals("/editer.do")) {
            Long id = Long.parseLong(request.getParameter("id"));
            Produit p = metier.getProduit(id);
            request.setAttribute("produit", p);
            request.getRequestDispatcher("editerProduit.jsp").forward(request, response);
        } else if (path.equals("/update.do")) {
            Long id = Long.parseLong(request.getParameter("id"));
            String nom = request.getParameter("nom");
            double prix = Double.parseDouble(request.getParameter("prix"));
            Produit p = new Produit();
            p.setIdProduit(id);
            p.setNomProduit(nom);
            p.setPrix(prix);
            metier.updateProduit(p);
            request.setAttribute("produit", p);
            request.getRequestDispatcher("confirmation.jsp").forward(request, response);
        } else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}
