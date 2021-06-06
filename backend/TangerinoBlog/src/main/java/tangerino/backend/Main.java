package tangerino.backend;

import java.text.DateFormat;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class Main {

	public static void main(String[] args) {

		Date data = new Date();
		DateFormat dfm = DateFormat.getDateInstance(DateFormat.SHORT);
		String dataAtual = dfm.format(data);

		System.setProperty("server.servlet.context-path", "/blogTangerino");
		SpringApplication.run(Main.class, args);
		new SpringApplicationBuilder(Main.class).web(WebApplicationType.SERVLET).run(args);

	}

}
