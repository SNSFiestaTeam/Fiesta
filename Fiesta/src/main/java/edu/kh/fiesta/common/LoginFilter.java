//package edu.kh.fiesta.common;
//
//import java.io.IOException;
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//@WebFilter(filterName="loginFilter",
//			urlPatterns = {"/main"})
//public class LoginFilter implements Filter {
//
//    public void init(FilterConfig fConfig) throws ServletException {
//    	System.out.println("로그인 필터 생성");
//    }
//
//    
//    public void destroy() {
//    	System.out.println("로그인 필터 파괴");
//	}
//
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//		
//		HttpServletRequest req = (HttpServletRequest) request;
//		HttpServletResponse resp = (HttpServletResponse) response;
//		
//		// 로그인 여부 확인
//		// -> session에 loginMember가 있는지 확인
//		HttpSession session = req.getSession(); 
//		
//		if(session.getAttribute("loginMember") != null) {
//			resp.sendRedirect("/main");
//			chain.doFilter(request, response);
//		} 
//		else {
//			resp.sendRedirect("/");
//			
//		}
//	}
//}
