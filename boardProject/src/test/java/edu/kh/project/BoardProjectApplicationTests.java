package edu.kh.project;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

@SpringBootTest
class BoardProjectApplicationTests {
	
	// ApplicationContext : Spring 컨테이너라고도 불리며, 애플리케이션에 필요한 Bean, DI 등 처리를 관리하는 인터페이스
	@Autowired
	private ApplicationContext applicationContext;
	
	@Test
	void contextLoads() {
		// 서버가 정상적으로 로드되었다면 컨텍스트가 null 이 아닌값으로 출력 (DB 설정, Bean 설정 등 모두 정상)
		assertThat(applicationContext).isNotNull();
	}

}
