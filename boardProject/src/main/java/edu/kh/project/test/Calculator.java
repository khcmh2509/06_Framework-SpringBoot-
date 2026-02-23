package edu.kh.project.test;

public class Calculator {
	
	public int add(int a, int b) {
		return a + b;
	}
	
	public int subtract(int a, int b) {
		return a - b;
	}
	
	public int multiply(int a, int b) {
		return a * b;
	}
	
	public int divide(int a, int b) {
		if(b == 0) {
			// 잘못된 전달인자 예외
			// 0으로 나누는 건 수학적으로 불가능하다는 뜻으로 사용
			throw new IllegalArgumentException("0으로 나눌 수 없음");
		}
		return a / b;
	}
	
	
}
