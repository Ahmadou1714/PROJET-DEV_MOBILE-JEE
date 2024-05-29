package metier_;

import java.sql.Connection;
import java.sql.DriverManager;

public class SingletonConnection {
private static Connection connection;

 
static {
try {
 


Class.forName("com.mysql.jdbc.Driver"); connection= DriverManager.getConnection ("jdbc:mysql://localhost:3306/DB_MVC_CAT","root","");System.out.println("connexion reussie"); 
} catch (Exception e) {
System.out.println("echec de connexion");

e.printStackTrace();
}
}

public static Connection getConnection() {
return connection;
}
}
