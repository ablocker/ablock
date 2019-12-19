package com.example.ExamSys.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.ExamSys.config.Constants;
import com.example.ExamSys.dao.StudentRepository;
import com.example.ExamSys.dao.TeacherRepository;
import com.example.ExamSys.dao.UserRepository;
import com.example.ExamSys.domain.Authority;
import com.example.ExamSys.domain.Student;
import com.example.ExamSys.domain.Teacher;
import com.example.ExamSys.domain.User;
import com.example.ExamSys.domain.enumeration.UserType;
import com.example.ExamSys.security.AuthoritiesConstants;
import com.example.ExamSys.service.ProductionService;
import com.example.ExamSys.service.UserService;
import com.example.ExamSys.service.VerifyService;
import com.example.ExamSys.utils.MD5Utils;
import com.example.ExamSys.vo.EmailUserDTO;
import com.example.ExamSys.vo.PhoneUserDTO;
import com.example.ExamSys.vo.UserInfoDTO;

@RestController
@RequestMapping("/account")
public class AccountController {
	private final Logger log = LoggerFactory.getLogger(AccountController.class);
	
	private static final String KEY = "examsys";
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private VerifyService verifyService;
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	@Autowired
	private ProductionService productionService;
	
	
	/**
	 * 用户输出收到的验证码，进行邮箱注册
	 * 参数: UserDTO
	 * 		hash:发送验证码后，返回的hash值
	 * 		time:发送验证码后，返回的time值
	 * 		verificationCode: 用户输入的验证码
	 * 返回值: ResponseEntity 状态
	 */
	// /register->/registeremail,userDTO新增手机号字段
	@RequestMapping(value = "/registeremail", method = RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<String> registerAccountEmail(@Valid @RequestBody EmailUserDTO userDTO, 
			@RequestParam(value = "hash") String hash, @RequestParam(value = "time") String time, @RequestParam(value = "verificationCode") String verificationCode){
		
		HttpHeaders textPlainHeaders = new HttpHeaders();
		
		String currentTime = verifyService.getCurrentTime();
		String hashNow = MD5Utils.getMD5Code(KEY + "@" + time + "@" + verificationCode);
		if(time.compareTo(currentTime) > 0) {
			if(hash.equalsIgnoreCase(hashNow)) {
				//校验成功
				return userRepository.findOneByLogin(userDTO.getLogin())
						.map(user -> new ResponseEntity<>("login already in use", textPlainHeaders, HttpStatus.BAD_REQUEST))
						.orElseGet(() -> userRepository.findOneByEmail(userDTO.getEmail())
								.map(user -> new ResponseEntity<>("email already in use", textPlainHeaders, HttpStatus.BAD_REQUEST))
								.orElseGet(() -> {
									if(userDTO.getUserType().equals(UserType.STUDENT)) {
										User user = userService.createUserEmail(userDTO.getLogin(),
												userDTO.getPassword(),
												userDTO.getEmail(),
												true);
										Set<Authority> authorities = new HashSet<Authority>();
										authorities.add(new Authority(AuthoritiesConstants.STUDENT));
										user.setAuthorities(authorities);
										userRepository.save(user);
										Student student = new Student();
										student.setUser(user);
										student.setAge(0);
										student.setLevel(1);
										studentRepository.save(student);
									} else {
										User user = userService.createUserEmail(userDTO.getLogin(),
												userDTO.getPassword(),
												userDTO.getEmail(),
												false);
										Set<Authority> authorities = new HashSet<Authority>();
										authorities.add(new Authority(AuthoritiesConstants.TEACHER));
										user.setAuthorities(authorities);
										userRepository.save(user);
										Teacher teacher = new Teacher();
										teacher.setUser(user);
										teacher.setAge(0);
										teacherRepository.save(teacher);
									}
									return new ResponseEntity<>(HttpStatus.CREATED);
								})
								);
			} else {
				//验证码不正确，校验失败
				return new ResponseEntity<>("验证码错误", textPlainHeaders, HttpStatus.BAD_REQUEST);
			}
		} else {
			// 超时
			return new ResponseEntity<>("验证码超时", textPlainHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	/**
	 * 用户输出收到的验证码，进行手机号注册
	 * 参数: UserDTO
	 * 		hash:发送验证码后，返回的hash值
	 * 		time:发送验证码后，返回的time值
	 * 		verificationCode: 用户输入的验证码
	 * 返回值: ResponseEntity 状态
	 */
	// 在student或者teacher里增加一条初始信息
	@RequestMapping(value = "/registerphone", method = RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<String> registerAccountPhone(@Valid @RequestBody PhoneUserDTO userDTO, 
			@RequestParam(value = "hash") String hash, @RequestParam(value = "time") String time, @RequestParam(value = "verificationCode") String verificationCode){
		
		HttpHeaders textPlainHeaders = new HttpHeaders();
		
		String currentTime = verifyService.getCurrentTime();
		String hashNow = MD5Utils.getMD5Code(KEY + "@" + time + "@" + verificationCode);
		if(time.compareTo(currentTime) > 0) {
			if(hash.equalsIgnoreCase(hashNow)) {
				//校验成功
				return userRepository.findOneByLogin(userDTO.getLogin())
						.map(user -> new ResponseEntity<>("login already in use", textPlainHeaders, HttpStatus.BAD_REQUEST))
						.orElseGet(() -> userRepository.findOneByPhoneNumber(userDTO.getPhoneNumber())
								.map(user -> new ResponseEntity<>("phoneNumber already in use", textPlainHeaders, HttpStatus.BAD_REQUEST))
								.orElseGet(() -> {
									if(userDTO.getUserType().equals(UserType.STUDENT)) {
										User user = userService.createUserPhone(userDTO.getLogin(),
												userDTO.getPassword(),
												userDTO.getPhoneNumber(),
												true);
										Set<Authority> authorities = new HashSet<Authority>();
										authorities.add(new Authority(AuthoritiesConstants.STUDENT));
										user.setAuthorities(authorities);
										userRepository.save(user);
										Student student = new Student();
										student.setUser(user);
										student.setAge(0);
										student.setLevel(1);
										studentRepository.save(student);
									} else {
										User user = userService.createUserPhone(userDTO.getLogin(),
												userDTO.getPassword(),
												userDTO.getPhoneNumber(),
												false);
										Set<Authority> authorities = new HashSet<Authority>();
										authorities.add(new Authority(AuthoritiesConstants.TEACHER));
										user.setAuthorities(authorities);
										userRepository.save(user);
										Teacher teacher = new Teacher();
										teacher.setUser(user);
										teacher.setAge(0);
										teacherRepository.save(teacher);
									}
									return new ResponseEntity<>(HttpStatus.CREATED);
								})
								);
			} else {
				//验证码不正确，校验失败
				return new ResponseEntity<>("验证码错误", textPlainHeaders, HttpStatus.BAD_REQUEST);
			}
		} else {
			// 超时
			return new ResponseEntity<>("验证码超时", textPlainHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	
	/**
	 * 忘记密码时，验证验证码
	 * 邮箱
	 */
	@RequestMapping(value = "/verifyforgetemail", method = RequestMethod.POST)
	public ResponseEntity<String> verifyForgetEmail(@RequestParam(value = "hash") String hash, 
			@RequestParam(value = "time") String time, @RequestParam(value="verificationCode") String verificationCode,
			@RequestParam(value="newPassword") String newPassword, @RequestParam(value="email") String email){
		
		HttpHeaders textPlainHeaders = new HttpHeaders();
		
		String currentTime = verifyService.getCurrentTime();
		String hashNow = MD5Utils.getMD5Code(KEY + "@" + time + "@" + verificationCode);
		if(time.compareTo(currentTime) > 0) {
			if(hash.equalsIgnoreCase(hashNow)) {
				Optional<User> userOpt = userRepository.findOneByEmail(email);
				if(!userOpt.isPresent()) {
					return new ResponseEntity<>("该账户并未注册", textPlainHeaders, HttpStatus.BAD_REQUEST);
				} else {
					BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
					String encodePassword = encoder.encode(newPassword);
					userRepository.updatePasswordByEmail(encodePassword, email);
					return ResponseEntity.ok().body("");
				}
				
			} else {
				return new ResponseEntity<>("验证码错误", textPlainHeaders, HttpStatus.BAD_REQUEST);
			}
		} else {
			return new ResponseEntity<>("验证码超时", textPlainHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	/**
	 * 忘记密码时，验证验证码
	 * 手机
	 */
	@RequestMapping(value = "/verifyforgetphone", method = RequestMethod.POST)
	public ResponseEntity<String> verifyForgetPhone(@RequestParam(value = "hash") String hash, 
			@RequestParam(value = "time") String time, @RequestParam(value="verificationCode") String verificationCode,
			@RequestParam(value="newPassword") String newPassword, @RequestParam(value="phoneNumber") String phoneNumber){
		
		HttpHeaders textPlainHeaders = new HttpHeaders();
		
		String currentTime = verifyService.getCurrentTime();
		String hashNow = MD5Utils.getMD5Code(KEY + "@" + time + "@" + verificationCode);
		if(time.compareTo(currentTime) > 0) {
			if(hash.equalsIgnoreCase(hashNow)) {
				Optional<User> userOpt = userRepository.findOneByPhoneNumber(phoneNumber);
				if(!userOpt.isPresent()) {
					return new ResponseEntity<>("该账户并未注册", textPlainHeaders, HttpStatus.BAD_REQUEST);
				} else {
					BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
					String encodePassword = encoder.encode(newPassword);
					userRepository.updatePasswordByPhoneNumber(encodePassword, phoneNumber);
					return ResponseEntity.ok().body("");
				}
				
			} else {
				return new ResponseEntity<>("验证码错误", textPlainHeaders, HttpStatus.BAD_REQUEST);
			}
		} else {
			return new ResponseEntity<>("验证码超时", textPlainHeaders, HttpStatus.BAD_REQUEST);
		}
	}
		
	/**
	 * 发送邮箱验证码
	 * 超时时间：5分钟
	 * 验证码位数：6位数
	 * 参数: email 邮箱
	 * 返回值：hash:密码密文
	 * 		time:时间字符串
	 */
	@RequestMapping(value = "/sendmessageemail", method = RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<Map<String, Object>> sendMessage(@RequestParam(value = "email") String email){
		
		Optional<User> userOpt = userRepository.findOneByEmail(email);
		if(userOpt.isPresent()) {
			return ResponseEntity.badRequest().header("Email", "The mailbox is occupied").body(null);
		}
		
		String randomNum = "1000000";
		String currentTime = verifyService.getFiveMinuteTime();
		try {
			randomNum = verifyService.getAndSendVerify(email);
		} catch(Exception e) {
			log.info("{}短信验证码发送出错", email);
			e.printStackTrace();
			return ResponseEntity.badRequest().header("Email", "Verification code send failed").body(null);
			
		}
		String hash = MD5Utils.getMD5Code(KEY + "@" + currentTime + "@" + randomNum);
		Map<String, Object> resultMap = new HashMap<>();
		resultMap.put("hash", hash);
		resultMap.put("time", currentTime);
		return ResponseEntity.ok().body(resultMap);
	}
	
	/**
	 * 忘记密码时，发送邮箱验证码
	 * 参数：email 邮箱
	 * 返回值：hash: 密文
	 * 		 time: 时间
	 */
	@RequestMapping(value = "/sendmessageforgetemail", method = RequestMethod.POST)
	public ResponseEntity<Map<String, Object>> sendMessageForget(@RequestParam(value = "email") String email){
		
		Optional<User> userOpt = userRepository.findOneByEmail(email);
		if(!userOpt.isPresent()) {
			return ResponseEntity.badRequest().header("Email", "The mailbox not be registered").body(null);
		}
		String randomNum = "1000000";
		String currentTime = verifyService.getFiveMinuteTime();
		try {
			randomNum = verifyService.getAndSendVerify(email);
		} catch(Exception e) {
			log.info("{}忘记密码短信验证码发送出错", email);
			e.printStackTrace();
			return ResponseEntity.badRequest().header("Email", "Verification code send failed").body(null);
			
		}
		String hash = MD5Utils.getMD5Code(KEY + "@" + currentTime + "@" + randomNum);
		Map<String, Object> resultMap = new HashMap<>();
		resultMap.put("hash", hash);
		resultMap.put("time", currentTime);
		return ResponseEntity.ok().body(resultMap);
	}
	
	/**
	 * 发送手机验证码
	 * 超时时间：5分钟
	 * 验证码位数：6位数
	 * 参数: phone 手机
	 * 返回值：hash:密码密文
	 * 		time:时间字符串
	 */
	@RequestMapping(value = "/sendmessagephone", method = RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<Map<String, Object>> sendMessagePhone(@RequestParam(value = "phoneNumber") String phoneNumber){
		
		Optional<User> userOpt = userRepository.findOneByPhoneNumber(phoneNumber);
		if(userOpt.isPresent()) {
			return ResponseEntity.badRequest().header("PhoneNumber", "The PhoneNumber is occupied").body(null);
		}
		
		String currentTime = verifyService.getFiveMinuteTime();
		HashMap<Boolean, String> response = verifyService.getAndSendVerifyMessage(phoneNumber);
		if(response.get(true) != null) {
			String hash = MD5Utils.getMD5Code(KEY + "@" + currentTime + "@" + response.get(true));
			Map<String, Object> resultMap = new HashMap<>();
			resultMap.put("hash", hash);
			resultMap.put("time", currentTime);
			return ResponseEntity.ok().body(resultMap);
		}
		else if(response.get(false) != null) {
			log.info("{}手机验证码发送出错，错误信息：{}", phoneNumber, response.get(false));
			return ResponseEntity.badRequest().header("PhoneNumber", response.get(false)).body(null);
		}
		else {
			log.info("{}手机验证码发送出现未知错误", phoneNumber, response.get(false));
			return ResponseEntity.badRequest().header("PhoneNumber", "An unknown error happened").body(null);
		}
	}
	
	/**
	 * 忘记密码时，发送手机验证码
	 * 参数：email 邮箱
	 * 返回值：hash: 密文
	 * 		 time: 时间
	 */
	@RequestMapping(value = "/sendmessageforgetphone", method = RequestMethod.POST)
	public ResponseEntity<Map<String, Object>> sendMessagePhoneForget(@RequestParam(value = "phoneNumber") String phoneNumber){
		
		Optional<User> userOpt = userRepository.findOneByPhoneNumber(phoneNumber);
		if(!userOpt.isPresent()) {
			return ResponseEntity.badRequest().header("PhoneNumber", "The phoneNumber not be registered").body(null);
		}
		
		String currentTime = verifyService.getFiveMinuteTime();
		HashMap<Boolean, String> response = verifyService.getAndSendVerifyMessage(phoneNumber);
		if(response.get(true) != null) {
			String hash = MD5Utils.getMD5Code(KEY + "@" + currentTime + "@" + response.get(true));
			Map<String, Object> resultMap = new HashMap<>();
			resultMap.put("hash", hash);
			resultMap.put("time", currentTime);
			return ResponseEntity.ok().body(resultMap);
		}
		else if(response.get(false) != null) {
			log.info("{}忘记密码手机验证码发送出错，错误信息：{}", phoneNumber, response.get(false));
			return ResponseEntity.badRequest().header("PhoneNumber", response.get(false)).body(null);
		}
		else {
			log.info("{}忘记密码手机验证码发送出现未知错误", phoneNumber, response.get(false));
			return ResponseEntity.badRequest().header("PhoneNumber", "An unknown error happened").body(null);
		}
	}
	
	@RequestMapping(value = "/savepersonal", method = RequestMethod.POST)
	public ResponseEntity<String> recordPersonalInfo(@Valid @RequestBody UserInfoDTO userInfoDTO,  @RequestParam("file") MultipartFile file){
		Set<Authority> authorities = userRepository.findAuthoritiesByLogin(userInfoDTO.getLogin());
		Boolean bool = true;

		if(authorities == null || authorities.isEmpty())
			return ResponseEntity.badRequest().header("Authority", "no Authority").body(null);
		if(authorities.contains(new Authority("ROLE_STUDENT"))) {
			studentRepository.updateInfoByLogin(userInfoDTO.getRealname(), userInfoDTO.getGender(), userInfoDTO.getAge(), userInfoDTO.getSchool(), 
					userInfoDTO.getProvince(), userInfoDTO.getCity(), userInfoDTO.getTown(), userInfoDTO.getTrainingAgency(), userInfoDTO.getMotto(), userInfoDTO.getLogin());
			try {
				File upl = File.createTempFile(userInfoDTO.getLogin() + "_", file.getOriginalFilename());
				IOUtils.copy(file.getInputStream(), new FileOutputStream(upl));
				
				bool = productionService.upLoadPersonalPhoto(userInfoDTO.getLogin(), upl, "Student");
			} catch (Exception e) {
				log.info(e.toString());
				bool = false;
				e.printStackTrace();
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			if(bool == false) {
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			return ResponseEntity.ok().body("");
		} else if(authorities.contains(new Authority("ROLE_TEACHER"))) {
			
			teacherRepository.updateInfoByLogin(userInfoDTO.getRealname(), userInfoDTO.getGender(), userInfoDTO.getAge(), userInfoDTO.getSchool(), 
					userInfoDTO.getProvince(), userInfoDTO.getCity(), userInfoDTO.getTown(), userInfoDTO.getTrainingAgency(), userInfoDTO.getMotto(), userInfoDTO.getLogin());
			try {
				File upl = File.createTempFile(userInfoDTO.getLogin() + "_", file.getOriginalFilename());
				IOUtils.copy(file.getInputStream(), new FileOutputStream(upl));
				
				bool = productionService.upLoadPersonalPhoto(userInfoDTO.getLogin(), upl, "Teacher");
			} catch (Exception e) {
				log.info(e.toString());
				bool = false;
				e.printStackTrace();
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			if(bool == false) {
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			return ResponseEntity.ok().body("");
		}
		return ResponseEntity.badRequest().header("Authority", "no Authority Student or Teacher").body(null);
	}
	
	/**
	 * 个人信息录入
	 * 参数: userId 用户id
	 * 返回值: StudentDTO
	 * username, realname, gender, age, phone, province, city, town, school
	 * trainingagency, motto, personalpic
	 */
	@RequestMapping(value = "/savepersonalInfo", method = RequestMethod.POST)
	public ResponseEntity<String> recordPersonalInfo(@Valid @RequestBody UserInfoDTO userInfoDTO){
		
		Set<Authority> authorities = userRepository.findAuthoritiesByLogin(userInfoDTO.getLogin());
		
		if(authorities == null || authorities.isEmpty())
			return ResponseEntity.badRequest().header("Authority", "no Authority").body(null);
		if(authorities.contains(new Authority("ROLE_STUDENT"))) {
			
			studentRepository.updateInfoByLogin(userInfoDTO.getRealname(), userInfoDTO.getGender(), userInfoDTO.getAge(), userInfoDTO.getSchool(), 
					userInfoDTO.getProvince(), userInfoDTO.getCity(), userInfoDTO.getTown(), userInfoDTO.getTrainingAgency(), userInfoDTO.getMotto(), userInfoDTO.getLogin());
			
			return ResponseEntity.ok().body("");
			
		} else if(authorities.contains(new Authority("ROLE_TEACHER"))) {
			
			teacherRepository.updateInfoByLogin(userInfoDTO.getRealname(), userInfoDTO.getGender(), userInfoDTO.getAge(), userInfoDTO.getSchool(), 
					userInfoDTO.getProvince(), userInfoDTO.getCity(), userInfoDTO.getTown(), userInfoDTO.getTrainingAgency(), userInfoDTO.getMotto(), userInfoDTO.getLogin());
			
			return ResponseEntity.ok().body("");
		}
		return ResponseEntity.badRequest().header("Authority", "no Authority Student or Teacher").body(null);
	}	
	
	/**
	 * 个人照片上传
	 * 参数: userId 用户id
	 * 返回值: StudentDTO
	 * username, realname, gender, age, phone, province, city, town, school
	 * trainingagency, motto, personalpic
	 */
	@RequestMapping(value = "/savepersonalPho", method = RequestMethod.POST)
	public ResponseEntity<String> recordPersonalPhoto(@RequestParam("login") String login, @RequestParam("file") MultipartFile file){
		
		Set<Authority> authorities = userRepository.findAuthoritiesByLogin(login);
		Boolean bool = true;
		
		if(authorities == null || authorities.isEmpty())
			return ResponseEntity.badRequest().header("Authority", "no Authority").body(null);
		
		if(authorities.contains(new Authority("ROLE_STUDENT"))) {
			try {
				File upl = File.createTempFile(login + "_", file.getOriginalFilename());
				IOUtils.copy(file.getInputStream(), new FileOutputStream(upl));
				
				bool = productionService.upLoadPersonalPhoto(login, upl, "Student");
			} catch (Exception e) {
				log.info(e.toString());
				bool = false;
				e.printStackTrace();
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			if(bool == false) {
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			return ResponseEntity.ok().body("");
			
		} else if(authorities.contains(new Authority("ROLE_TEACHER"))) {
			try {
				File upl = File.createTempFile(login + "_", file.getOriginalFilename());
				IOUtils.copy(file.getInputStream(), new FileOutputStream(upl));
				
				bool = productionService.upLoadPersonalPhoto(login, upl, "Teacher");
			} catch (Exception e) {
				log.info(e.toString());
				bool = false;
				e.printStackTrace();
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			if(bool == false) {
				return ResponseEntity.badRequest().header("Photo", "Photo save failed").body(null);
			}
			return ResponseEntity.ok().body("");
		}
		return ResponseEntity.badRequest().header("Authority", "no Authority Student or Teacher").body(null);
	}
	
	/**
	 * 获得个人信息
	 * @param login 用户名
	 * @return
	 */
	@RequestMapping(value = "/getpersonalInfo", method = RequestMethod.POST)
	public ResponseEntity<String> getPersonalInfo(@RequestParam("login") String login){
		
		Set<Authority> authorities = userRepository.findAuthoritiesByLogin(login);
		if(authorities == null || authorities.isEmpty())
			return ResponseEntity.badRequest().header("Authority", "no Authority").body("no Authority");
		if(authorities.contains(new Authority("ROLE_STUDENT"))) {
			try {
				Student student = studentRepository.findOneByLogin(login);
				if(student == null)
					return ResponseEntity.badRequest().header("PersonalInfo", "no this person's info").body(null);
				JSONObject json = new JSONObject();
				json.put("realname", student.getName());
				json.put("gender", student.getGender());
				json.put("age", student.getAge());
				json.put("school", student.getSchool());
				json.put("province", student.getSchoolProvince());
				json.put("city", student.getSchoolCity());
				json.put("town", student.getSchoolRegion());
				json.put("trainingAgency", student.getTrainingName());
				json.put("motto", student.getMotto());
				
				return ResponseEntity.ok().body(json.toString());
			} catch (Exception e) {
				log.info(e.toString());
				e.printStackTrace();
				return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body("Get failed");
			}
			
		} else if(authorities.contains(new Authority("ROLE_TEACHER"))) {
			try {
				Teacher teacher = teacherRepository.findOneByLogin(login);
				if(teacher == null)
					return ResponseEntity.badRequest().header("PersonalInfo", "no this person's info").body(null);
				JSONObject json = new JSONObject();
				json.put("realname", teacher.getName());
				json.put("gender", teacher.getGender());
				json.put("age", teacher.getAge());
				json.put("school", teacher.getSchool());
				json.put("province", teacher.getSchoolProvince());
				json.put("city", teacher.getSchoolCity());
				json.put("town", teacher.getSchoolRegion());
				json.put("trainingAgency", teacher.getTrainingName());
				json.put("motto", teacher.getMotto());
				
				return ResponseEntity.ok().body(json.toString());
			} catch (Exception e) {
				log.info(e.toString());
				e.printStackTrace();
				return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body("Get failed");
			}
		}
		return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body("Get failed");
	}
	
	/**
	 * 获得个人照片
	 * @param login 用户名
	 * @return
	 */
//	@RequestMapping(value = "/getpersonalPho", produces = MediaType.IMAGE_JPEG_VALUE)
	@RequestMapping(value = "/getpersonalPho", method = RequestMethod.POST)
	@ResponseBody	
//	public byte[] getPersonalPho(@RequestParam("login") String login){
	public ResponseEntity<String> getPersonalPho(@RequestParam("login") String login){
		
		Set<Authority> authorities = userRepository.findAuthoritiesByLogin(login);
		if(authorities == null || authorities.isEmpty())
			return null;
		if(authorities.contains(new Authority("ROLE_STUDENT"))) {
			try {
				Student student = studentRepository.findOneByLogin(login);
				if(student == null)
					return ResponseEntity.badRequest().header("PersonalInfo", "no this person's info").body(null);
				String url = student.getPhotoUrl();
				if(url == null || url.equals("")) {
//					return new byte[0];
					return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body(null);
				}
				File file = new File(url);
				FileInputStream inputStream = new FileInputStream(file);

				byte[] bytes = new byte[inputStream.available()];

				inputStream.read(bytes, 0, inputStream.available());
				inputStream.close();
				
				String data = Base64.encodeBase64String(bytes);
				
//				return bytes;
				return ResponseEntity.ok().body(data);
				
				} catch (Exception e) {
				log.info(e.toString());
				e.printStackTrace();
//				return new byte[0];
				return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body(null);
			}
			
		} else if(authorities.contains(new Authority("ROLE_TEACHER"))) {
			try {
				Teacher teacher = teacherRepository.findOneByLogin(login);
				if(teacher == null)
					return ResponseEntity.badRequest().header("PersonalInfo", "no this person's info").body(null);
				String url = teacher.getPhotoUrl();
				if(url == null || url.equals("")) {
//					return new byte[0];
					return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body(null);
				}
				File file = new File(url);
				FileInputStream inputStream = new FileInputStream(file);

				byte[] bytes = new byte[inputStream.available()];

				inputStream.read(bytes, 0, inputStream.available());
				inputStream.close();
				
				String data = Base64.encodeBase64String(bytes);
//				return bytes;
				return ResponseEntity.ok().body(data);
				
			} catch (Exception e) {
				log.info(e.toString());
				e.printStackTrace();
//				return new byte[0];
				return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body(null);
			}
		}
//		return new byte[0];
		return ResponseEntity.badRequest().header("PersonalInfo", "Get failed").body(null);
	}
	
	@RequestMapping(value = "/getAuthority", method = RequestMethod.POST)
	public ResponseEntity<String> getAuthority(@RequestParam("login") String login){
		Set<Authority> authorities = userRepository.findAuthoritiesByLogin(login);
		if(authorities == null || authorities.isEmpty())
			return null;
		for(int i=0; i< Constants.AUTHORITIES.length; i++) {
			if(authorities.contains(new Authority(Constants.AUTHORITIES[i]))){
				return ResponseEntity.ok().body(Constants.AUTHORITIES[i]);
			}
		}
		return ResponseEntity.badRequest().header("message", "You have no authority").body(null);
	}
}
