package edu.kh.project.test;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CalculatorTest {

	private Calculator calculator = new Calculator();
	
	// JUnit5 는 기본적으로 테스트 메서드마다 테스트 클래스의
	// 인스턴스를 새로 생성
	// @BeforeAll / @AfterAll : 테스트 클래스내의 모든 테스트가 
	// 시작되기 전(또는 후)에 딱 한번만 실행되어야 함
	// -> 만약 static이 아니면, 테스트 클래스 인스턴스가 
	// 생성되기도 전에 JUnit이 해당 메서드를 호출할 방법이 없음
	// -> 즉, 클래스가 메모리에 로드될 때 딱 한번만 실행하기 위해
	// static이 강제되는 것
	
	@BeforeAll
	public static void setUp() {
		log.info("테스트 시작");
	}
	
	@Test
	public void testAdd() {
		assertEquals(5, calculator.add(2, 4));
	}
	
	@Test
	public void testSubtract() {
		assertEquals(1, calculator.subtract(3, 2));
	}
	
	@Test
	public void testMutiply() {
		assertEquals(6, calculator.multiply(2, 3));
	}
	
	@Test
	public void testDivide() {
		assertEquals(2, calculator.divide(6, 3));
	}
	
	@Test
	public void testDivideByZero() {
		assertThrows(IllegalArgumentException.class,
				() -> calculator.divide(5,0));
	}
	
	
	@AfterAll
	public static void testComplete() {
		log.info("모든 테스트 완료");
	}
	
}
