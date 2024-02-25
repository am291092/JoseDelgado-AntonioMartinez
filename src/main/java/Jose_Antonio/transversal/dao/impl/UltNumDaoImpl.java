package Jose_Antonio.transversal.dao.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import Jose_Antonio.transversal.dao.IDAOUltNum;
import Jose_Antonio.transversal.domain.entity.UltNumEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;

@Service
public class UltNumDaoImpl implements IDAOUltNum{
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public void save(UltNumEntity numero) {
		try {
			em.persist(numero);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}

	@Override
	public void remove(UltNumEntity numero) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<UltNumEntity> findAll() {
		List<UltNumEntity> lstNumeros= null;
		TypedQuery<UltNumEntity> query = null;
		
		try {
			query = em.createQuery(" select d from UltNumEntity d ", UltNumEntity.class);
			lstNumeros = query.getResultList();
		
		} catch (Exception e) {
			
		}
		return lstNumeros;
	}
	
	@Override
	public List<String> masRepetidos() {
		List<String> lstNumeros= null;
		TypedQuery<String> query = null;
		
		try {
			query = em.createQuery("SELECT u.numero FROM UltNumEntity u GROUP BY u.numero ORDER BY COUNT(u) DESC", String.class);
			query.setMaxResults(5);
			lstNumeros = query.getResultList();
			System.out.println("asdf"+lstNumeros.get(0));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lstNumeros;
		
	}
	
	@Override
	public List<String> menosRepetidos() {
		List<String> lstNumeros= null;
		TypedQuery<String> query = null;
		
		try {
			query = em.createQuery("SELECT u.numero FROM UltNumEntity u GROUP BY u.numero ORDER BY COUNT(u) ASC", String.class);
			query.setMaxResults(5);
			lstNumeros = query.getResultList();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lstNumeros;
		
	}

}
