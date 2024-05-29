<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
</head>
<body>
    <form action="controleur" method="post">
        <input type="text" name="motCle" value="${modele.motCle}">
        <input type="submit" value="OK">
    </form>
    <table border="1" width="80%">
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
        </tr>
        <c:forEach items="${modele.produits}" var="p">
            <tr>
                <td>${p.idProduit}</td>
                <td>${p.nomProduit}</td>
                <td>${p.prix}</td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
