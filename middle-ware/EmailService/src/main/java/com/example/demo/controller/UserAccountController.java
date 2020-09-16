package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ConfirmationToken;
import com.example.demo.entity.User;
import com.example.demo.repository.ConfirmationTokenRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.EmailSenderService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class UserAccountController {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;

	@Autowired
	private EmailSenderService emailSenderService;

	@PostMapping("/register")
	public boolean registerUser(@RequestBody User user) {
		System.out.println(user);
		User existingUser = userRepository.findByEmailIgnoreCase(user.getEmail());
		// System.out.println(existingUser);
		if (existingUser != null) {
			return false;

		} else {
			userRepository.save(user);

			ConfirmationToken confirmationToken = new ConfirmationToken(user);

			confirmationTokenRepository.save(confirmationToken);

			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(user.getEmail());
			mailMessage.setSubject("Complete Registration!");
			mailMessage.setFrom("team.egasseva@gmail.com");
			mailMessage.setText("To confirm your account, please click here : "
					+ " http://localhost:4200/registrationStepper?token=" + confirmationToken.getConfirmationToken());
			emailSenderService.sendEmail(mailMessage);
			System.out.println("mail sent" + mailMessage);

			return true;
		}
	}

	@RequestMapping(value = "/confirm-account", method = { RequestMethod.GET, RequestMethod.POST })
	public List<String> confirmUserAccount(@RequestParam("token") String confirmationToken) {
		System.out.println(confirmationToken);
		List<String> l = new ArrayList<String>();
		ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
		// System.out.println("token is"+token);
		if (token != null) {
			User user = userRepository.findByEmailIgnoreCase(token.getUser().getEmail());
			user.setEnabled(true);
			userRepository.save(user);
			System.out.println("user enabled ");
			l.add("user registered");
			return l;
		} else {
			l.add("error");
			return l;
		}
	}

	@GetMapping("/sendReply")
	public void sendReply(@RequestParam("email") String email, @RequestParam("reply") String reply) {
		System.out.println("sending email");

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(email);
		mailMessage.setSubject("Reply to your query");
		mailMessage.setFrom("team.egasseva@gmail.com");
		mailMessage.setText("Reply: " + reply);
		emailSenderService.sendEmail(mailMessage);
		System.out.println("mail sent" + mailMessage);

	}
}
