package metier;
import dao.Idao;

public class MetierImpl implements Imetier {
    private Idao dao;

    public void setDao(Idao dao) {
        this.dao = dao;
    }

    @Override
    public double calcul() {
        double nb = dao.getValue();
        return 2 * nb;
    }
}
