package edu.kh.fiesta.feed.model.sevice;

import java.util.List;

import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

public interface FeedService {

	List<Member> selectFollowingList(int memberNo);

}
