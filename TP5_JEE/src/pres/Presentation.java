package pres;

import java.io.*;
import java.lang.reflect.*;
import java.util.Scanner;
import metier.Imetier;
import dao.Idao;

public class Presentation {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(new File("config.txt"));
            String daoClassName = scanner.next();
            String metierClassName = scanner.next();
            
            Class<?> cdao = Class.forName(daoClassName);
            
            Idao dao = (Idao) cdao.getDeclaredConstructor().newInstance();
            
            Class<?> cmetier = Class.forName(metierClassName);
            Imetier metier = (Imetier) cmetier.getDeclaredConstructor().newInstance();
            
            Method meth = cmetier.getMethod("setDao", Idao.class);
            meth.invoke(metier, dao);
            
            System.out.println(metier.calcul());
            
            scanner.close();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
