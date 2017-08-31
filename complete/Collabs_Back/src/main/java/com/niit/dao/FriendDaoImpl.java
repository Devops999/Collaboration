package com.niit.dao;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.Friend;
import com.niit.model.Users;
@Repository

public class FriendDaoImpl implements FriendDao{
	@Autowired
	private SessionFactory sessionFactory;

	public List<Users> listOfSuggestedUsers(String username) {
		Session session=sessionFactory.openSession();
		SQLQuery sqlQuery=session.createSQLQuery("select * from users_info where username in"
		+"(select username from users_info where username!=? minus"
				+"(select fromId from Friend where toId=? union"
		+"(select toId from Friend where fromId=?)))");
		sqlQuery.setString(0, username);
		sqlQuery.setString(1, username);
		sqlQuery.setString(2, username);
		sqlQuery.addEntity(Users.class);
		List<Users> suggestedUsersList=sqlQuery.list();
		session.close();
		return suggestedUsersList;
	}
	public void friendRequest(String fromUsername,String toUsername){
		Session session=sessionFactory.openSession();
	    Friend friend=new Friend();
	  //  friend.setFromId(fromUsername);
	   // friend.setToId(toUsername);
	  //  friend.setStatus('P');
	    session.save(friend);
	    session.flush();
	    session.close();
	}
	public List<Friend> listOFPendingRequests(String toUsername) {
		Session session=sessionFactory.openSession();
		Query query=session.createQuery("from Friend where toId=? and status=?");
		query.setString(0, toUsername);
		query.setCharacter(1, 'P');
		List<Friend> pendingRequests=query.list();
		session.close();
		
		return pendingRequests;
	}
	public List<Friend> getFriendList(String username) {
		// TODO Auto-generated method stub
		Session session=sessionFactory.openSession();
		Query query=session.createQuery("from Friend where(fromId=? o toId=?) and sttus=?");
		query.setString(0,username);
		query.setString(1,username);
		query.setCharacter(2, 'A');
		@SuppressWarnings("uncheckes")
		List<Friend> friendList=query.list();
		session.close();
		return friendList;
		
	}
	public void updatePendingRequest(String fromId, String toId, char status) {
		// TODO Auto-generated method stub
		Session session=sessionFactory.openSession();
		Query query=session.createQuery("from Friend where fromId=? AND toId=?");
		query.setString(0, fromId);
		query.setString(1, toId);
		Friend friend=(Friend) query.uniqueResult();
		friend.setStatus(status);
		session.update(friend); 
		session.flush();
		session.close();	
	}
}