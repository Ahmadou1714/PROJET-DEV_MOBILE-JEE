<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Modification des Produits</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <%@include file="header.jsp" %>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Modification des Produits
            </div>
            <div class="card-body">
                <form action="update.do" method="post">
                    <div class="form-group">
                        <label for="id" class="control-label">ID Produit :</label>
                        <input type="text" id="id" name="id" class="form-control" value="${produit.idProduit}" required>
                    </div>
                    <div class="form-group">
                        <label for="nom" class="control-label">Nom Produit :</label>
                        <input type="text" id="nom" name="nom" class="form-control" value="${produit.nomProduit}" required>
                    </div>
                    <div class="form-group">
                        <label for="prix" class="control-label">Prix :</label>
                        <input type="text" id="prix" name="prix" class="form-control" value="${produit.prix}" required>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Modifier</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
